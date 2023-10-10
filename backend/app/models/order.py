from pydantic import BaseModel
from typing import Optional, List

class Name(BaseModel):
  given_name: Optional[str] = None
  surname: Optional[str] = None

  def to_dict(self):
    return dict(self)

class Payer(BaseModel):
  payer_id: Optional[str] = None
  email_address: Optional[str] = None
  name: Name
  address: Optional[str] = None

  def to_dict(self):
    return {**dict(self), "name": self.name.to_dict()}

class PurchaseUnits(BaseModel):
  amount: Optional[float] = None
  description: Optional[str] = None

  def to_dict(self):
    return dict(self)

class PaymentDetails(BaseModel):
  id: Optional[str] = None
  create_time: Optional[str] = None
  payer: Payer
  purchase_units: PurchaseUnits

  def to_dict(self):
    return {**dict(self), "payer": self.payer.to_dict(), "purchase_units": self.purchase_units.to_dict()}

class HomeAddress(BaseModel):
  province: Optional[str] = None
  canton: Optional[str] = None
  district: Optional[str] = None
  exact_address: Optional[str] = None

  def to_dict(self):
    return dict(self)

class UserData(BaseModel):
  name: Optional[str] = None
  address: Optional[str] = None
  phone: Optional[str] = None
  user_id: Optional[str] = None

  def to_dict(self):
    return dict(self)

class Order(BaseModel):
  user_data: UserData
  home_address: HomeAddress
  payment_details: PaymentDetails
  products: List[str] 

  def to_dict(self):
    return { 
      "user_data": self.user_data.to_dict(), 
      "home_address": self.home_address.to_dict(), 
      "payment_details": self.payment_details.to_dict(),
      "products": [product for product in self.products]
    }