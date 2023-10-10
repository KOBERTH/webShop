from models.cart import CartProduct, UpdateData
from schemas.product import cartProducts_schema
from dataBase import client

collection = client.cart

def save_products_in_cart(product: CartProduct):
  productDict = dict(product)

  # Verificar si el producto ya existe en la colección
  existing_product = collection.find_one({"id": productDict["id"]})

  if existing_product:
    # Si el producto ya existe, devolver un mensaje indicando esto
    return {
      "message": "El producto ya existe, no se pudo añadir."
    }
  
  collection.insert_one(productDict)
  return {
    "message": "Productos guardados correctamente"
  }

def view_cart_products(user: str):
  if user and len(user) > 3:
    products = collection.find({"user": user})
    products_list = list(products)
    return cartProducts_schema(products_list)
  return {"message": "No se proporcionó un identificador de los productos que desea "}

def update_cart_products(dataOpc: UpdateData):
  tempSesionId = dataOpc.tempSessionId
  products = dataOpc.products

  if tempSesionId:
    for product in products:
      # Actualiza el documento que coincide con el tempSesionId y el id del producto proporcionados
      updated_product = collection.update_one(
        {"tempSesionId": tempSesionId, "id": product.id},
        {"$set": {"amount": product.amount}}
      )
    return {
      "message": "Productos actualizados correctamente"
    }

  return {"message": "No se proporcionó un identificador de los productos que desea "}

def delete_cart_product(id: str):
  product_delete = collection.find_one_and_delete({"id": id})
  if not product_delete:
    return {"error": "No se pudo eliminar el usuario"}
  return {
    "message": "Eliminado"
  }