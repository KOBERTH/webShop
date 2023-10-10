def product_schema_all(product) -> dict:
  return{
    "id": str(product["public_id"]),
    "created_at": product["created_at"],
    "img": product["img_url"],
    "name": product["name"],
    "price": product["price"],
    "discount": product["discount"],
    "description": product["description"],
    "category": product["category"],
    "active": product["active"],
    "brand": product["brand"]
  }

def products_schema(products) -> list:
  return [product_schema_all(product) for product in products]

def product_schema_basic(product) -> dict:
  return{
    "id": str(product["public_id"]),
    "img": product["img_url"],
    "name": product["name"],
    "price": product["price"],
    "discount": product["discount"]
  }

def products_schema_basic(products) -> list:
  return [product_schema_basic(product) for product in products]

def product_schema_detailed(product) -> dict:
  return{
    "id": str(product["public_id"]),
    "img": product["img_url"],
    "name": product["name"],
    "price": product["price"],
    "discount": product["discount"],
    "description": product["description"],
    "brand": product["brand"],
    "category": product["category"]
  }

def products_schema_detailed(products) -> list:
  return [product_schema_detailed(product) for product in products]

def cartProduct_schema(product) -> dict:
  return{
    "id": str(product["id"]),
    "user": product["user"],
    "img_url": product["img_url"],
    "name": product["name"],
    "price": product["price"],
    "amount": product["amount"]
  }

def cartProducts_schema(products) -> list:
  return [cartProduct_schema(product) for product in products]