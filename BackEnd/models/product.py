from sqlalchemy import Column, Integer, String, Float
from database.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    name = Column(String, index=True, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)
    type = Column(String, nullable=False) 
    image_url = Column(String, nullable=True)
    category = Column(String, default="Clothes", nullable=False) 
