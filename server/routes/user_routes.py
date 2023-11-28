from models import db, User, Product, Order, OrderItem
from config import app, login_manager
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, url_for, redirect, jsonify, make_response
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user, login_required


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

@app.route("/profile", methods = ['GET'])
@login_required
def profile():
    if request.method == 'GET':
        return make_response(current_user.to_dict(), 200)


@app.route('/register', methods=["POST"])
def register():
    if request.method == "POST":
        data = request.get_json()
        user = User(email=data['email'], password=data['password'], first_name=data['first_name'], last_name=data['last_name'])
        db.session.add(user)
        db.session.commit()
        return jsonify(message="Registration successful")

@app.route("/login", methods=['GET', "POST"])
def login():
    if request.method == "POST":
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()
        if user and user.password == data['password']:
            login_user(user)
            return jsonify(message="Login successful")
        return jsonify(message="Login failed"), 401
    if current_user.is_authenticated:
        return jsonify(message="GET successful")
    
    return jsonify(message="NO user")
    


@app.route("/logout")
def logout():
    if current_user.is_authenticated:
        logout_user()
        return jsonify(message="Logout successful")
    else:
        return jsonify(message="Logout unavailable")
    
    
@app.route('/add_to_order/<int:product_id>', methods=['POST'])
@login_required
def add_to_order(product_id):
    user = current_user

    product = Product.query.get(product_id)

    if product:
        # Check if the user has an open order, create one if not
        if not user.orders or user.orders[-1].status != 'open':
            order = Order(status='open', user=user)
            db.session.add(order)
            db.session.commit()
        else:
            order = user.orders[-1]

        # Add the product to the order
        order_item = OrderItem(quantity=1, product=product, order=order)
        db.session.add(order_item)
        db.session.commit()

        return jsonify(message="Product added to order successfully"), 200
    else:
        return jsonify(message="Product not found"), 404

@app.route('/checkout', methods=['GET'])
@login_required
def checkout():
    user = current_user

    # Check if the user has an open order
    if user.orders and user.orders[-1].status == 'open':
        order = user.orders[-1]

        # Calculate the total price of the order
        total_price = sum(item.product.price * item.quantity for item in order.order_items)

        return jsonify(order_id=order.id, total_price=total_price, items=[item.product.to_dict() for item in order.order_items]), 200
    else:
        return jsonify(message="No open order found"), 404


if __name__ == "__main__":
    app.run()
    
    