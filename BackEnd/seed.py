# seed_db.py
from database.database import SessionLocal
from crud.product import create_product
from schemas.product import ProductCreate

def seed_database():
    db = SessionLocal()
    try:
        products = [
            ProductCreate(
                title="Nike Jacket",
                name="Nike Jacket",
                description="Stylish sports jacket",
                price=179.99,
                type="Jacket",
                image_url="https://example.com/nikejacket.png",
                category="Clothes"
            ),
            ProductCreate(
                title="Adidas Sneakers",
                name="Adidas Sneakers",
                description="Comfortable running shoes",
                price=89.99,
                type="Footwear",
                image_url="https://example.com/adidassneakers.png",
                category="Clothes"
            ),
            ProductCreate(
                title="iPhone 15",
                name="iPhone 15",
                description="Latest iPhone with A17 chip",
                price=999.99,
                type="Smartphone",
                image_url="https://example.com/iphone15.png",
                category="Electronics"
            ),
            ProductCreate(
                title="Samsung Galaxy S23",
                name="Samsung Galaxy S23",
                description="High-performance Android phone",
                price=799.99,
                type="Smartphone",
                image_url="https://example.com/galaxys23.png",
                category="Electronics"
            )
        ]

        for product in products:
            create_product(db, product)
        print("Database seeded successfully!")
    finally:
        db.close()

if __name__ == "__main__":
    seed_database()