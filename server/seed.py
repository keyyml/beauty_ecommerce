from app import app
from models import db, User, Product, Review

if __name__ == '__main__':
    with app.app_context():

        User.query.delete()
        Product.query.delete()
        Review.query.delete()

        # seed 3 users
        users_to_add = []

        users_to_add.append(User(
            id = 1,
            username = "jenny123",
            password = "p4$$w0rd",
            email = "jenny123@gmail.com"
        ))

        users_to_add.append(User(
            id = 2,
            username = "Carl",
            password = "xsecurexpasswordx",
            email = "carl123@gmail.com"
        ))

        users_to_add.append(User(
            id = 3,
            username = "4vicky86",
            password = "abcABC",
            email = "vicky123@gmail.com"
        ))

        db.session.add_all(users_to_add)
        db.session.commit()

        products_to_add = []

        products_to_add.append(Product(
            id = 1,
            name = "Putty Blush",
            description = "Shade: Turks and Caicos",
            price = 7.99,
            brand = "e.l.f.",
            image = "insert url"

        ))

        products_to_add.append(Product(
            id = 2,
            name = "The Chocolates Eyeshadow Palette",
            description = "Shades Row 1: Crater Brown, Beaver, English Walnut Row 2: Crown of Thorns, Di Serria, Roman Coffee",
            price = 12.99,
            brand = "Juvia's Place",
            image = "insert url"
        ))

        products_to_add.append(Product(
            id = 3,
            name = "Goof Proof Waterproof Easy Shape & Fill Eyebrow Pencil",
            description = "Shade: 3.5 Natural Medium Brown",
            price = 26.00,
            brand = "Benefit Cosmetics",
            image = "insert url"
        ))

        db.session.add_all(products_to_add)
        db.session.commit()

        reviews_to_add = []

        reviews_to_add.append(Review(
            id = 1,
            product_id = 2,
            user_id = 3,
            rating = 7,
            comment = "I Loved this product it made my routine so much better!"
        ))

        reviews_to_add.append(Review(
            id = 2,
            product_id = 1,
            user_id = 2,
            rating = 9,
            comment = "The shades are amazing!"
        ))

        reviews_to_add.append(Review(
            id = 3,
            product_id = 3,
            user_id = 1,
            rating = 8,
            comment = "This is such a great addition to my makeup collection!"
        ))

        db.session.add_all(reviews_to_add)
        db.session.commit()

        orders_to_add = []

