from fastapi import APIRouter
from bson import ObjectId

from api.models.cart import DataOpc, UpdateData, CartProduct
from api.dataBaseClient import client
from api.schemas.product import cartProducts_schema

collection = client.cart

router = APIRouter(
  prefix="/cart",
  tags=["products"]
)

@router.post('/addProductToCart')
async def save_products(product: CartProduct):
  productDict = dict(product)

  # Agregar el campo _id al diccionario
  productDict['_id'] = ObjectId(productDict['id'])
  del productDict['id']

  collection.insert_one(productDict)

  return {
    "message": "Productos guardados correctamente"
  }

@router.post('/getProducts')
async def view_products(dataOpc: DataOpc):
  user = dataOpc.user
  tempSesionId = dataOpc.tempSessionId

  if user and len(user) > 3:
    products = collection.find({"user": user})
    products_list = list(products)
    return cartProducts_schema(products_list)
  
  if tempSesionId:
    products = collection.find({"tempSesionId": tempSesionId})
    products_list = list(products)
    return cartProducts_schema(products_list)
  
  return {"message": "No se proporcionó un identificador de los productos que desea "}

@router.put('/updateProducts')
async def update_products(dataOpc: UpdateData):
  tempSesionId = dataOpc.tempSessionId
  products = dataOpc.products

  if tempSesionId:
    for product in products:
      # Actualiza el documento que coincide con el tempSesionId y el id del producto proporcionados
      updated_product = collection.update_one(
        {"tempSesionId": tempSesionId, "_id": ObjectId(product.id)},
        {"$set": {"amount": product.amount}}
      )
    return {
      "message": "Productos actualizados correctamente"
    }

  return {"message": "No se proporcionó un identificador de los productos que desea "}


@router.delete('/delete_product')
async def remove_product(id: str):
  product_delete = collection.find_one_and_delete({"_id": ObjectId(id)})
  if not product_delete:
    return {"error": "No se pudo eliminar el usuario"}
  
  # product_delete_dict = json.loads(dumps(product_delete))
  return {
    "message": "Eliminado"
  }