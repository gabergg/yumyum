import csv
import requests
import os
import sys

from app import app, db
from models import Rating, Spot
from flask import jsonify, request, make_response

GOOGLE_PLACES_ENDPOINT = "https://maps.googleapis.com/maps/api/place/autocomplete/json"
SF_LAT_LONG = "37.760737,-122.467954"
PLACE_RADIUS = "10000"

data = {
    "authors": ["Jenn", "Gabe"]
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
    spot = res_json.get('spot')
    rating = res_json.get('rating')

    try:
        new_rating = Rating(
            author = rating.get('author'),
            score = rating.get('score'),
            description = rating.get('description'),
        )
        existing_spot = Spot.query.where(google_id = spot.get('google_id'))
        if existing_spot:
            existing_spot.ratings.concat(new_rating)
        else:
            existing_spot = Spot(
                name = spot.get('name'),
                google_id = spot.get('google_id'),
                ratings = [new_rating],
        )

        db.session.add_or_update(existing_spot)

        db.session.add(new_rating) # drop this?
        db.session.commit()
        print "Successfully submitted rating"
    except:
        print "Failed to submit rating"
        print str(sys.exc_info()[0])
    return jsonify({})

def fake_suggestion(name, id):
    return {
        "name": name,
        "description": name + ", Tokyo, Japan",
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
    return jsonify(build_fake_suggestions(inp))
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
