from flask import Flask, make_response, request
from models import db, User
from config import app

@app.route('/users', methods = ['GET'])
def users():
    if request.method == 'GET':
        users = User.query.all()
        return make_response([user.to_dict() for user in users],200)

@app.route('/users/<int:id>', methods = ['GET'])
def user_by_id(id):
    if request.method == 'GET':
        users = User.query.filter_by(id = id).all()
        return make_response([user.to_dict() for user in users],200)