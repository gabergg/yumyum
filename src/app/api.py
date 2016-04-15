import csv
import requests

from app import app
from flask import jsonify, request, make_response

GOOGLE_PLACES_ENDPOINT = "https://maps.googleapis.com/maps/api/place/autocomplete/json"
SF_LAT_LONG = "37.760737,-122.467954"
PLACE_RADIUS = "10000"

data = {
    "authors": ["jenn", "gabe"]
}
api_keys = {}

with open('secrets.csv', 'rb') as csvfile:
    keyreader = csv.reader(csvfile, delimiter=':')
    for row in keyreader:
        api_keys[row[0]] = row[1]

@app.route('/api/startup', methods=['POST'])
def fetch_initial_data():
    return jsonify(data)

def build_fake_suggestions(inp):
    return {
        "suggestions": [inp + str(i) for i in range(5)]
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
    print predictions
    suggestions = map(lambda x: x['description'], predictions)
    return jsonify({"suggestions": suggestions})
