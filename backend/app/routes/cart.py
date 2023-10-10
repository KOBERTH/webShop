from fastapi import APIRouter
from models.cart import UpdateData, CartProduct
from services.cart_services import save_products_in_cart, update_cart_products,view_cart_products, delete_cart_product

router = APIRouter(
  prefix="/api/cart",
  tags=["products"]
)

@router.get('/{user}')
async def view_products(user: str):
  return view_cart_products(user)

@router.post('/')
async def save_products(product: CartProduct):
  return save_products_in_cart(product)  

@router.put('/')
async def update_products(dataOpc: UpdateData):
  return update_cart_products(dataOpc)

@router.delete('/product/{id}')
async def remove_product(id: str):
  return delete_cart_product(id)