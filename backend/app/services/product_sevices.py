from typing import List

from dataBase import client
from models.product import Product
from schemas.product import products_schema_basic, product_schema_detailed

collection = client.products

def save_products(products: List[Product]):
  last_product = collection.find_one(sort=[('public_id', -1)])

  if last_product is None:
    next_id = 1
  else:
    next_id = int(last_product['public_id']) + 1

  for product in products:
    product.public_id = str(next_id)
    next_id += 1
    collection.insert_one(dict(product))

  return {
    "message": "Productos guardados correctamente"
  }

def get_products_by_category(category: str) -> List[Product]:
  products = collection.find({"category": category})
  products_list = list(products)
  return products_schema_basic(products_list)

def get_products_with_purchases():
  products = collection.find({"purchase_count": {"$gt": "0"}})
  products_list = list(products)
  return products_schema_basic(products_list)


def get_product_by_id(id: str):
  product = collection.find_one({"public_id": id})
  return product_schema_detailed(product)

def delete_all_products():
  collection.delete_many({})
  return {
    "message": "all delete"
  }

def search_products(query: str):
  products = collection.find({"name": {"$regex": query, "$options": "i"}})
  products_list = list(products)
  return products_schema_basic(products_list)
