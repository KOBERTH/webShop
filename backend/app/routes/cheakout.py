from fastapi import APIRouter, HTTPException
from models.invoice_details import InvoiceDetails
from services.payment_service import create_checkout_session, PaymentData

router = APIRouter(
  prefix='/api/checkout'
)

@router.post("/")
async def checkout(payment_data: PaymentData, invoice_details: InvoiceDetails):
  result = await create_checkout_session(payment_data, invoice_details)
  if "error" in result:
    return(result)
  return result
