from sqlalchemy import Column, Integer, String, Float
from database.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    name = Column(String, index=True)
    description = Column(String)
    price = Column(Float)
    type = Column(String)  # clothing or footwear
    image_url = Column(String)

    def __repr__(self):
        return f"<Product(title='{self.title}', price={self.price})>"