# database/database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from config.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in settings.DATABASE_URL else {}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Function to initialize database and migrate
def init_db():
    Base.metadata.create_all(bind=engine)
    # Migrate to add category column if it doesn't exist
    migrate_add_category_column()

def migrate_add_category_column():
    from sqlalchemy import inspect
    inspector = inspect(engine)
    columns = [col["name"] for col in inspector.get_columns("products")]
    
    if "category" not in columns:
        conn = engine.connect()
        # conn.execute("ALTER TABLE products ADD COLUMN category TEXT DEFAULT 'Clothes'")
        conn.close()