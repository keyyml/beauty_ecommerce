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
    password = db.Column(db.String)

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
        return f'<User id: {self.id} username: {self.username} email: {self.email}'
    
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    comment = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

    product = db.relationship('Product', backref='reviews')
    user = db.relationship('User', backref='reviews')

    def __repr__(self):
        return f'<Review id: {self.id} rating: {self.rating}/10 comment: {self.comment} user_id: {self.user_id} product_id: {self.product_id}>'
    
class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    color = db.Column(db.String)
    price = db.Column(db.Integer)
    brand = db.Column(db.String)
    image = db.Column(db.String)

    def __repr__(self):
        return f'<Product id: {self.id} name: {self.name} description: {self.color} price: {self.price} brand: {self.brand}>'
    
class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship('User', backref='orders')

    def __repr__(self):
        return f'<Order id: {self.id} status: {self.status} user_id: {self.user_id} >'
    
class OrderItem(db.Model, SerializerMixin):
    __tablename__ = 'order_items'

    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))

    order = db.relationship('Order', backref='order_items')
    product = db.relationship('Product', backref='products')

    def __repr__(self):
        return f'<OrderItem id: {self.id} quantity: {self.quantity} product_id: {self.product_id} order_id: {self.order_id}>'
    
class Category(db.Model, SerializerMixin):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    description = db.Column(db.String)

    def __repr__(self):
        return f'<Category id: {self.id} name: {self.name} description: {self.description} >'
    
class ProductCategory(db.Model, SerializerMixin):
    __tablename__ = 'product_categories'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))

    def __repr__(self):
        return f'<Category id: {self.product_id} category_id: {self.category_id}>'