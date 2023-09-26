from fastapi import APIRouter
from bson import ObjectId
from typing import List

from api.dataBaseClient import client
from api.models.product import Product
from api.schemas.product import products_schema, product_schema

collection = client.products

router = APIRouter(
  prefix="/products",
  tags=["products"]
)

@router.post('/post_products')
async def save_products(products: List[Product]):

  products_dict = [dict(product) for product in products]

  collection.insert_many(products_dict)

  return {
    "message": "Productos guardados correctamente"
  }

@router.get('/get_products/{category}')
async def view_products(category: str):
  products = collection.find({"category": category})
  products_list = list(products)
  return products_schema(products_list)

@router.get('/get_product/{id}')
async def view_products(id: str):
  product = collection.find_one({"_id": ObjectId(id)})  
  return product_schema(product)

@router.get('/search')
async def search_products(query: str):
  # Use the query parameter to filter products from the database
  products = collection.find({"name": {"$regex": query, "$options": "i"}})
  products_list = list(products)
  return products_schema(products_list)

@router.delete('/delete_product')
async def remove_product(id: str):
  product_delete = collection.find_one_and_delete({"_id": ObjectId(id)})
  if not product_delete:
    return {"error": "No se pudo eliminar el usuario"}
  
  return product_delete

@router.delete('/delete_all')
async def remove_product():
  products_delete = collection.delete_many({})
  if not products_delete:
    return {"error": "No se pudo eliminar el usuario"}
  
  return {
    "message": "all delete"
  }