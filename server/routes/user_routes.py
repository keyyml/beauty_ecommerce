from models import db, User
from config import app, login_manager
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, url_for, redirect, jsonify, make_response
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user


@app.route('/users', methods = ['GET', 'POST'])
def users():
    if request.method == 'GET':
        users = User.query.all()
        return make_response([user.to_dict() for user in users],200)
    elif request.method == 'POST':
        form_data = request.get_json()
    try:
        new_user = User(
            first_name = form_data['last_name'],
            last_name = form_data['first_name'],
            email = form_data['email'],
            password = form_data['password']
        )
        db.session.add(new_user)
        db.session.commit()
        return make_response(new_user.to_dict(), 201)
    except ValueError:
        response = {"errors": ["validation errors"]}
        return make_response(response, 403)

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

# API routes for React to communicate with
@app.route('/register', methods=["POST"])
def register():
    if request.method == "POST":
        data = request.get_json()
        user = User(email=data['email'], password=data['password'])
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

# ... Other code ...

if __name__ == "__main__":
    app.run()
    
    