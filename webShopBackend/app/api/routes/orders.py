from fastapi import APIRouter

from api.dataBaseClient import client
from api.models.order import Order

router = APIRouter(
  prefix="/order",
  tags=["orders"]
)

collection = client.orders

@router.post("/create_order")
async def crear_orden(order: Order):
  orden_dict = order.to_dict()
  # Aquí puedes agregar la lógica para verificar el pago con PayPal usando orden.id_pago
  
  result = collection.insert_one(orden_dict)
  
  if result.acknowledged:
    return {"message": 'Orden creada'}
  else:
    return {"error": "La orden no pudo ser creada"}