from flask import Flask, make_response, request
from models import db, User
from config import app

@app.route('/users', methods = ['GET'])
def users():
    if request.method == 'GET':
        users = User.query.all()
        return make_response([user.to_dict(rules={'reviews': ['-user']}, depth=1) for user in users],200)
    