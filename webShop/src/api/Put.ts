type Product = {
  id: string;
  amount: string;
}

export async function updateFetchProducts(tempSessionId: string, products: Product[]) {
  try {
    const response = await fetch('http://127.0.0.1:8000/cart/updateProducts', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tempSessionId,
        products,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}