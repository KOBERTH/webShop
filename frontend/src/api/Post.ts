
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
