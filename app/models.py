from app import db


class Spot(db.Model):
    __tablename__ = 'spots'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    ratings = db.relationship('Rating')

    def __init__(self, name, ratings):
        self.name = name
        self.ratings = ratings

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def get_ratings(self):
        return [rating.to_api_dict() for rating in self.ratings]

    def to_api_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'ratings': self.get_ratings(),
        }


class Rating(db.Model):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer())
    description = db.Column(db.Text())
    author = db.Column(db.String(255), unique=True)

    def __init__(self, author, score, description):
        self.author = author
        self.score = score
        self.description = description

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def to_api_dict(self):
        return {
            'id': self.id,
            'score': self.score,
            'description': self.description,
            'author': self.author,
        }
