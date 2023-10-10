from fastapi import APIRouter, HTTPException
from services.payment_service import create_checkout_session, PaymentData

router = APIRouter(
  prefix='/api/checkout'
)

@router.post("/")
async def checkout(payment_data: PaymentData):
  result = await create_checkout_session(payment_data)
  if "error" in result:
    # raise HTTPException(status_code=400, detail=result["error"])
    return(result)
  return result