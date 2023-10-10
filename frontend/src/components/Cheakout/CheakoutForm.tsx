import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Input from "../Input";
import CheakoutProduct from "./CheakoutProduct";
import Button from "../Button";
import useCustomContext from "../../hooks/useCustomContext";

export default function CheakoutForm () {
  const { total, items } = useCustomContext();
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const cardElement = elements?.getElement(CardElement);
  
    if (cardElement) {
      const result = await stripe?.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (!result?.error) {
        const paymentMethodId = result?.paymentMethod.id;
        const payment_data = {
          id: paymentMethodId,
          amount: 10000,
        };
  
        // Recoger los datos del formulario
        const invoice_details = {
          fullname: e.target.fullname.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          address: e.target.address.value,
          postalcode: e.target.postalcode.value,
          generallocation: e.target.generallocation.value,
          total: total,
        };
  
        axios.post('http://localhost:8000/api/checkout', { payment_data, invoice_details })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  

  return (
    <form className="p-4 flex w-full flex-col gap-4 text-custom-white lg:w-4/5 xl:w-1/2" onSubmit={handleSubmit}>
      <Input id="fullname" name="fullname" label="full name" />
      <Input id="email" name="email" label="email" type="email" />
      <Input id="phone" name="phone" label="phone number" type="tel" />
      <Input id="address" name="address" label="Address" />
      <Input id="postalcode" name="postalcode" label="Postal Code" />
      <Input id="generallocation" name="generallocation" label="Country / Province / Region" />
      <br />
      <div>
        <h2 className="text-xl text-text font-medium uppercase tracking-widest md:text-2xl after:content-normal after:block after:w-12 after:h-1 after:bg-highlight lg:text-3xl">
          Your Products
        </h2>
        <div className="mt-4 flex flex-col gap-4">
          {
            items.map((item) => (
              <CheakoutProduct
                key={item.id} 
                img={item.img_url}
                name={item.name}
                price={item.price}
                amount={parseInt(item.amount)}
              />
              ))
            }
        </div>
        <div className="flex justify-between py-4 tracking-widest text-xl">
          <p>Total:</p>
          <span>$ {total}</span>
        </div>
      </div>
      {/* {/* <PaymentElement /> */}
      <div className="bg-text p-2 rounded-lg">
        <CardElement />
      </div>
      <Button width="w-full">Buy</Button>
    </form>
  )
}