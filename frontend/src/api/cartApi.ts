
export async function get_cart_products (user: string) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/cart/${user}`);
      const data = await response.json();
      return data;
  } catch (error) {
    console.error('Error / No hay usuario registrado / elementos no encontrados');
  }
}

type productProps = {
  id: string, 
  user: string, 
  img_url: string, 
  name: string, 
  price: string
}

export async function save_product_in_cart (product: productProps) {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/cart', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    });
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error al guardar el producto en el carrito');
  }
}