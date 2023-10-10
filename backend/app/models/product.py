from typing import Optional, List
from pydantic import BaseModel
from datetime import datetime

class Product(BaseModel):
  public_id: Optional[str] = "0"
  created_at: Optional[str] = datetime.now().strftime("%d/%m/%Y %H:%M")
  img_url: str
  name: str
  price: str
  discount: Optional[str] = "0"
  description: List[str]
  category: str
  active: Optional[bool] = True
  purchase_count: Optional[str] = "0"
  brand: str