from pydantic import BaseModel, validator
from typing import Literal

class ProductBase(BaseModel):
    title: str
    name: str
    description: str
    price: float
    type: Literal["clothing", "footwear"]  # Restrict to specific types
    image_url: str

    @validator('price')
    def price_must_be_positive(cls, v):
        if v <= 0:
            raise ValueError('Price must be positive')
        return v

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True