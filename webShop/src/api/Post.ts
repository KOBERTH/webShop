
export async function getCartProducts (user?: string, tempSessionId?: string) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/cart/getProducts`, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json',}, 
        body: JSON.stringify({user, tempSessionId})
      });
      const data = await response.json();
      return data;
  } catch (error) {
    console.error('Error / No hay usuario registrado / elementos no encontrados');
  }
}

export async function addProductToCart (product: {id: string, user: string, tempSesionId: string, img_url: string, name: string, price: string }) {
  try {
    const response = await fetch('http://127.0.0.1:8000/cart/addProductToCart', {
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


export const authUser = async (login: boolean, userData: {email: string, password: string}) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/auth/${login ? 'login' : 'register'}`, {
      method: 'POST',
      headers: login ? {
        'Content-Type': 'application/x-www-form-urlencoded'
      } : {
        'Content-Type': 'application/json'
      },
      
      body: login ? 
        new URLSearchParams({
          username: userData.email,
          password: userData.password
        })
      :
        JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Dato incorrectos');
  }
}

export const saveOrder = async (order_details: PurchaseDetailsProps) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/order/create_order', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(order_details)
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Dato incorrectos');
  }
}
