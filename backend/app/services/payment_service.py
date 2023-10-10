from pydantic import BaseModel
from stripe.error import StripeError
import stripe

stripe.api_key = "sk_test_51MwroREgA8JjolxWk3ENs8FZIiiBirS9TLjkGV4A3IUTx4mrzKElhO0PDbwcdjUMlb0k7MeidT3qye2IAoTwZbmD005uyHCJDD"

class PaymentData(BaseModel):
  id: str
  amount: int

async def create_checkout_session(payment_data: PaymentData):
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
    return {"message": "Successful Payment"}
  except StripeError as e:
    return {"error": e.user_message}
