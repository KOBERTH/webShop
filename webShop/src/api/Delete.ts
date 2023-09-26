
export const deleteProductFromCart = async (id: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/cart/delete_product?id=${id}`, { method: 'DELETE' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al eliminar el producto del carrito');
  }
}