from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import products, auth, cart, orders

app = FastAPI()

origins = [
  "http://localhost:5173",
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get('/')
def reed_root():
  return {
    'API': 'v0.1'
  }

app.include_router(products.router)
app.include_router(orders.router)
app.include_router(auth.router)
app.include_router(cart.router)