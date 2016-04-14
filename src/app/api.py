from app import app
from flask import jsonify

@app.route('/api/startup', methods=['POST'])
def fetch_initial_data():
    return jsonify({"silly": "bun"})
