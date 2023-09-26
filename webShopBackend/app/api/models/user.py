from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
  id: Optional[str]
  email: str
  disabled: bool = False


class UserDB(User):
  id: Optional[str] = ""
  password: str
