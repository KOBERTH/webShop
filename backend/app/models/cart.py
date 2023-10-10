from pydantic import BaseModel
from typing import Optional, List

class CartProduct(BaseModel):
  id: str
  user: Optional[str] = None
  img_url: str
  name: str
  price: str
  amount: str

class UpdateData(BaseModel):
  tempSessionId: str
  products: List[CartProduct]