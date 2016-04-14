# from app import app, db


# class Spot(db.model):

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(255))
#     ratings = db.relationship('Rating')

#     def get_ratings(self):
#         return [rating.to_api_dict() for rating in self.ratings]

#     def to_api_dict(self):
#         return {
#             'id': self.id,
#             'name': self.name,
#             'ratings': self.get_ratings(),
#         }


# class Rating(db.model):

#     id = db.Column(db.Integer, primary_key=True)
#     score = db.Column(db.Integer())
#     description = db.Column(db.Text())
#     author = db.Column(db.String(255), unique=True)

#     def to_api_dict(self):
#         return {
#             'id': self.id,
#             'score': self.score,
#             'description': self.description,
#             'author': self.author,
#         }
