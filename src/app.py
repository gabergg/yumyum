from models import Spot


@app.route('/', methods=['GET'])
def get_home():
    render_stuff()

@app.route('/api/spot', methods=['POST'])
def create_or_update_rating(data):
    spot = Spot.query.filter_by(id=data.spot_id)
    if spot
        spot.update(data)
    else
        new Spot(data)


@app.route('/api/spot/[:spot_id]', methods=['GET'])
def get_rating():
    spot = spot.query.filter_by(id=spot_id)
    json.dump(spot)
