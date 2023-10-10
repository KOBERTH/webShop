export const fetchProducts = async (to: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/products/${to}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('No hay usuario registrado / elementos no encontrados');
  }
}