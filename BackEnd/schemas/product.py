from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    title: str
    name: str
    description: Optional[str] = None
    price: float
    type: str  # Example: "clothing" or "footwear"
    image_url: Optional[str] = None
    category: str = "Clothes"  # Default category

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True  # Pydantic v2 (For v1, use `orm_mode = True`)
