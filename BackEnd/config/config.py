from pydantic_settings import BaseSettings
from pydantic import validator
from typing import List
from dotenv import load_dotenv
import os

# Explicitly load .env file
load_dotenv()

class Settings(BaseSettings):
    APP_NAME: str = "MyApp"
    ENVIRONMENT: str = "development"
    DATABASE_URL: str = "sqlite:///./test.db"
    ALLOWED_ORIGINS: List[str] = ["*"]
    SECRET_KEY: str = "defaultsecretkey"

    @validator("ALLOWED_ORIGINS", pre=True)
    def parse_allowed_origins(cls, v):
        print(f"Debug: Raw ALLOWED_ORIGINS value from env: '{v}', type: {type(v)}")
        if isinstance(v, str):
            if v.strip():  # Ensure the string is not empty after trimming
                result = [item.strip() for item in v.split(",") if item.strip()]
                print(f"Debug: Parsed ALLOWED_ORIGINS: {result}")
                return result
            else:
                raise ValueError("ALLOWED_ORIGINS cannot be empty")
        elif isinstance(v, list):
            return v
        return v

    class Config:
        env_file = ".env"  # This will look for the .env file in the root directory
        env_file_encoding = "utf-8"

# Create an instance of the Settings class to load and parse values
settings = Settings()

# For debugging purposes, print all the settings
print(f"Debug: Final settings: {settings.dict()}")