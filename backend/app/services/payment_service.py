from stripe.error import StripeError
from pydantic import BaseModel
import stripe

from dotenv import load_dotenv
import os


from dataBase import client
from models.invoice_details import InvoiceDetails

collection = client.orders

load_dotenv()
stripe.api_key = os.getenv('STRIPE_APIKEY')

class PaymentData(BaseModel):
  id: str
  amount: int

async def create_checkout_session(payment_data: PaymentData, invoice_details: InvoiceDetails):
  try:
    payment = stripe.PaymentIntent.create(
      amount=payment_data.amount,
      currency="usd",
      description="Gaming Keyboard",
      payment_method=payment_data.id,
      confirm=True,
      return_url="http://localhost:5173/",
    )
    print(payment)
    # Insertar los datos de la factura en MongoDB
    invoice_details_dict = dict(invoice_details)
    result = collection.insert_one(invoice_details_dict)

    return {"message": "Successful Payment"}
  except StripeError as e:
    return {"error": e.user_message}
