from pydantic import BaseModel
from typing import Optional, List

class DataOpc(BaseModel):
  user: Optional[str]
  tempSessionId: Optional[str]

class CartProduct(BaseModel):
  id: str
  user: Optional[str] = None
  tempSesionId: Optional[str] = None
  img_url: str
  name: str
  price: str
  amount: str

class UpdateData(BaseModel):
  tempSessionId: str
  products: List[CartProduct]