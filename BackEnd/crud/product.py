# crud/product.py
from sqlalchemy.orm import Session
from models.product import Product
from schemas.product import ProductCreate

def get_products(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Product).offset(skip).limit(limit).all()

def get_product(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id).first()

def create_product(db: Session, product: ProductCreate):
    db_product = Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

# New functions for electronics
def get_electronics(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Product).filter(Product.category == "Electronics").offset(skip).limit(limit).all()

def get_electronic_by_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id, Product.category == "Electronics").first()