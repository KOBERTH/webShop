import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Input from "../Input";
import CheakoutProduct from "./CheakoutProduct";
import Button from "../Button";

export default function CheakoutForm () {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e: { preventDefault: any; }) => {
    e.preventDefault();

    const cardElement = elements?.getElement(CardElement);

    if (cardElement) {
      const result = await stripe?.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (!result?.error) {
        const paymentMethodId = result?.paymentMethod.id;
        const paymentData = {
          id: paymentMethodId,
          amount: 10000,
        };

        axios.post('http://localhost:8000/api/checkout', paymentData)
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
    <form className="p-4 flex w-full flex-col gap-4 text-custom-white lg:w-1/2" onSubmit={handleSubmit}>
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
          <CheakoutProduct />
          <CheakoutProduct />
        </div>
        <div className="flex justify-between py-4 tracking-widest text-xl">
          <p>Total:</p>
          <span>$200</span>
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