from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

convention = {"fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s"}
metadata = MetaData(naming_convention=convention)
db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.string)

    @validates('username')
    def validate_username(self, key, username):
        if not username:
            raise ValueError("User must have a username")
        return username
    
    @validates('password')
    def validate_password(self, key, password):
        if not password:
            raise ValueError("User must have a password")
        return password
    
    @validates('email')
    def validate_email(self, key, email):
        if not email:
            raise ValueError("User must have an email")
        return email

    def __repr__(self):
        return f'<User {self.id} {self.username} {self.email}'
    
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    comment = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

    def __repr__(self):
        return f'<Review {self.id} {self.rating} {self.comment} {self.user_id} {self.product_id}>'
    
class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    brand = db.Column(db.String)   

    def __repr__(self):
        return f'<Product {self.id} {self.name} {self.description} {self.price} {self.brand}>'
    
class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __repr__(self):
        return f'<Order {self.id} {self.status} {self.user_id} >'
    
class OrderItem(db.Model, SerializerMixin):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    price = db.Column(db.Integer)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))

    def __repr__(self):
        return f'<OrderItem {self.id} {self.quantity} {self.price} {self.product_id} {self.order_id}>'
    
class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)

    def __repr__(self):
        return f'<Category {self.id} {self.name} {self.description} >'
    
class ProductCategory(db.Model, SerializerMixin):
    __tablename__ = 'product_categories'

    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    def __repr__(self):
        return f'<Category {self.product_id} {self.category_id}>'