export const searchProducts = async (query: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/search?query=${query}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error fetching data:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const getProductsByCategory = async (categoryName: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/get_products/${categoryName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('No hay usuario registrado / elementos no encontrados');
  }
}

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/get_product/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('No hay usuario registrado / elementos no encontrados');
  }
}