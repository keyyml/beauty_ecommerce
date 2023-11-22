from models import db, User
from config import app, login_manager
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, url_for, redirect, jsonify, make_response
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user


@app.route('/users', methods = ['GET'])
def users():
    if request.method == 'GET':
        users = User.query.all()
        return make_response([user.to_dict() for user in users],200)

@app.route('/users/<int:id>', methods = ['GET', 'PATCH', 'DELETE'])
def user_by_id(id):
    user = User.query.filter_by(id = id).first()
    if user is None:
        response = {"errors": ["validation errors"]}
        return make_response(response, 403)
    elif request.method == 'GET':
        return make_response(user.to_dict(), 200)
    elif request.method == 'PATCH':
        form_data = request.get_json()
        try:
            for attr in form_data:
                setattr(user, attr, form_data.get(attr))
            db.session.commit()
            return make_response(user.to_dict(), 200)
        except ValueError:
            return make_response({"errors": ["validation errors"]}, 403)
    elif request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return make_response({}, 200)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/register', methods=["POST"])
def register():
    if request.method == "POST":
        data = request.get_json()
        user = User(email=data['email'], password=data['password'], first_name=data['first_name'], last_name=data['last_name'])
        db.session.add(user)
        db.session.commit()
        return jsonify(message="Registration successful")

@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()
        if user and user.password == data['password']:
            login_user(user)
            return jsonify(message="Login successful")

    return jsonify(message="Login failed"), 401

@app.route("/logout")
def logout():
    logout_user()
    return jsonify(message="Logout successful")

if __name__ == "__main__":
    app.run()
    
    