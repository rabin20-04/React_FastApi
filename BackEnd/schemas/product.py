from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    title: str
    name: str
    description: Optional[str] = None
    price: float
    type: str  
    image_url: Optional[str] = None
    category: str = "Clothes"  

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True 
