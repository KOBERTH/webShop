from fastapi import APIRouter
from typing import List
from models.product import Product

from services.product_sevices import delete_all_products, get_product_by_id, get_products_by_category, save_products, get_products_with_purchases, search_products

router = APIRouter(
  prefix="/api/products",
  tags=["products"]
)

@router.post('/')
async def create_product(products: List[Product]):
  return save_products(products)

@router.get('/category/{category}')
async def view_products(category: str):
  return get_products_by_category(category)

@router.get('/popular/list')
async def popular_prodcuts():
  return get_products_with_purchases()

@router.get('/product/{id}')
async def view_product(id: str):
  return get_product_by_id(id)

@router.delete('/delete_all')
async def remove_product():
  return delete_all_products()

@router.get('/search/{query}')
async def search_products_by_query(query: str):
  return search_products(query) 

# @router.delete('/delete_product')
# async def remove_product(id: str):
#   product_delete = collection.find_one_and_delete({"_id": ObjectId(id)})
#   if not product_delete:
#     return {"error": "No se pudo eliminar el usuario"}
  
#   return product_delete