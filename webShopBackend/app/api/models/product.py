from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime
# from bson import ObjectId

class Product(BaseModel):
  created_at: Optional[str] = datetime.now().strftime("%d/%m/%Y %H:%M")
  img_url: str
  name: str
  price: str
  discount: Optional[str] = "0"
  description: List[str]
  category: str
  active: bool
  brand: str
