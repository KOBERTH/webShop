from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from dataBase import client
from functions.search_user import search_user, search_user_db
from models.user import User, UserDB
from schemas.user import user_schema

router = APIRouter(
  prefix="/auth",
  tags=["basicauth"],
  responses={status.HTTP_404_NOT_FOUND: {"message": "Not Found"}}
)

oauth2 = OAuth2PasswordBearer(tokenUrl="login")

collection = client.users

@router.post("/login")
async def login(form: OAuth2PasswordRequestForm = Depends()):
  print(form.username)
  user = search_user_db("email", form.username)
  print(user)
  
  if not user:
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST, detail="El usuario no es correcto")

  if not form.password == user.password:
    raise HTTPException(
      status_code=status.HTTP_400_BAD_REQUEST, detail="La contraseña no es correcta")

  return {
    "id": user.id,
    "user": user.email
  }


@router.post("/register", response_model=User, status_code=status.HTTP_201_CREATED)
async def user(user: UserDB):
  if type(search_user("email", user.email)) == User:
    raise HTTPException(
      status_code=status.HTTP_404_NOT_FOUND, detail="El usuario ya existe")

  user_dict = dict(user)
  del user_dict["id"]

  id = collection.insert_one(user_dict).inserted_id

  new_user = user_schema(collection.find_one({"_id": id}))

  return User(**new_user)