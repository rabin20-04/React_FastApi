from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from config.config import settings
from database.database import get_db, init_db
from schemas.product import Product, ProductCreate
from crud.product import (
    get_products,
    get_product,
    create_product,
    get_electronics,
    get_electronic_by_id,
    get_clothes,
    get_clothes_by_id,
)

app = FastAPI(
    title=settings.APP_NAME,
    docs_url="/docs" if settings.ENVIRONMENT != "production" else None,
    redoc_url=None,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    init_db()


@app.get("/health")
def health_check():
    return {"status": "healthy", "environment": settings.ENVIRONMENT}


@app.get("/products/", response_model=List[Product])
def read_products(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_products(db, skip=skip, limit=limit)


@app.get("/products/{product_id}", response_model=Product)
def read_product(product_id: int, db: Session = Depends(get_db)):
    product = get_product(db, product_id=product_id)
    if product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


@app.post("/products/", response_model=Product)
def create_new_product(product: ProductCreate, db: Session = Depends(get_db)):
    return create_product(db=db, product=product)


@app.get("/products/electronics/", response_model=List[Product])
def read_electronics(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_electronics(db, skip=skip, limit=limit)


@app.get("/products/electronics/{product_id}", response_model=Product)
def read_electronic(product_id: int, db: Session = Depends(get_db)):
    product = get_electronic_by_id(db, product_id=product_id)
    if product is None:
        raise HTTPException(status_code=404, detail="Electronic product not found")
    return product

@app.get("/products/clothes/", response_model=List[Product])
def read_clothes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_clothes(db, skip=skip, limit=limit)


@app.get("/products/clothes/{product_id}", response_model=Product)
def read_clothe(product_id: int, db: Session = Depends(get_db)):
    product = get_clothes_by_id(db, product_id=product_id)
    if product is None:
        raise HTTPException(status_code=404, detail="Clothes product not found")
    return product


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=settings.ENVIRONMENT != "production",
    )
