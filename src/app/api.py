from app import app
from flask import jsonify

data = {
    "authors": ["gabe", "jenn"]
}

@app.route('/api/startup', methods=['POST'])
def fetch_initial_data():
    return jsonify(data)
