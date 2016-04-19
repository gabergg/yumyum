import csv
import requests
import os
import sys

from app import app, db
from models import Rating
from flask import jsonify, request, make_response

GOOGLE_PLACES_ENDPOINT = "https://maps.googleapis.com/maps/api/place/autocomplete/json"
SF_LAT_LONG = "37.760737,-122.467954"
PLACE_RADIUS = "10000"

data = {
    "authors": ["jenn", "gabe"]
}
api_keys = {}

if app.config['DEBUG']:
    with open('secrets.csv', 'rb') as csvfile:
        keyreader = csv.reader(csvfile, delimiter=':')
        for row in keyreader:
            api_keys[row[0]] = row[1]
else:
    api_keys['google'] = os.environ['GOOGLE_API_KEY']

@app.route('/api/startup', methods=['POST'])
def fetch_initial_data():
    return jsonify(data)

@app.route('/api/submit_rating', methods=['POST'])
def submit_rating():
    res_json = request.get_json()
    author = res_json.get("author")
    rating = res_json.get("rating")
    description = res_json.get("description")
    try:
        new_rating = Rating(
            author = author,
            score = rating,
            description = description,
        )
        db.session.add(new_rating)
        db.session.commit()
        print "%s %d %s" % (author, rating, description)
    except:
        print sys.exc_info()[0]
        print "shit we failed"
    return jsonify({})

def fake_suggestion(name, id):
    return {
        "name": name,
        "id": id,
    }

def build_fake_suggestions(inp):
    return {
        "suggestions": [fake_suggestion(inp + str(i), i) for i in range(5)]
    }

def build_suggestion(prediction):
    return {
        "name": prediction['terms'][0]['value'],
        "description": prediction['description'],
        "id": prediction['id'],
    }

@app.route('/api/autocomplete', methods=['POST'])
def get_suggestions():
    inp = request.get_json().get('input')
    payload = {
        'input': request.get_json().get('input'),
        'key': api_keys['google'],
        'location': SF_LAT_LONG,
        'radius': PLACE_RADIUS,
    }
    res = requests.get(GOOGLE_PLACES_ENDPOINT, params=payload)
    predictions = res.json().get('predictions')
    suggestions = map(build_suggestion, predictions)
    return jsonify({"suggestions": suggestions})
