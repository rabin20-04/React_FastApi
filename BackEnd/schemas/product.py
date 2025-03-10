from pydantic import BaseModel  # type:ignore


class ProductBase(BaseModel):
    title: str
    name: str
    description: str
    price: float
    type: str
    image_url: str


class ProductCreate(ProductBase):
    pass


class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True
