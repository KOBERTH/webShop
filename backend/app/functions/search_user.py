
from models.user import User, UserDB
from schemas.user import user_schema, user_schema_db
from backend.app.dataBase import client

collection = client.users

def search_user(field: str, key):
  try:
    user = collection.find_one({field: key})
    return User(**user_schema(user))
  except:
    return {"error": "No se ha encontrado el usuario"}

def search_user_db(field: str, key):
  try:
    user = collection.find_one({field: key})
    return UserDB(**user_schema_db(user))
  except:
    return {"error": "No se ha encontrado el usuario"}

