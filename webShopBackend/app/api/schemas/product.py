def product_schema(product) -> dict:
  return{
    "id": str(product["_id"]),
    "created_at": product["created_at"],
    "img_url": product["img_url"],
    "name": product["name"],
    "price": product["price"],
    "discount": product["discount"],
    "description": product["description"],
    "category": product["category"],
    "active": product["active"]
  }

def products_schema(products) -> list:
  return [product_schema(product) for product in products]

def cartProduct_schema(product) -> dict:
  return{
    "user": product["user"],
    "id": str(product["_id"]),
    "img_url": product["img_url"],
    "name": product["name"],
    "price": product["price"],
    "amount": product["amount"],
    # "discount": product["discount"],
  }

def cartProducts_schema(products) -> list:
  return [cartProduct_schema(product) for product in products]