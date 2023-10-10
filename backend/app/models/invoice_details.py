from pydantic import BaseModel

class InvoiceDetails(BaseModel):
  fullname: str
  email: str
  phone: str
  address: str
  postalcode: str
  generallocation: str
  total: float
