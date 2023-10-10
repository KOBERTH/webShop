import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import useCustomContext from "../hooks/useCustomContext";
// import { SubmitHandler, useForm } from 'react-hook-form';
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import Layout from "../Layouts/Layout";
import Input from "../components/Inputs/Input";

function CheakoutForm () {
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
    <form className="p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      {/* <Input id="fullname" name="fullname" label="full name" />
      <Input id="email" name="email" label="email" type="email" />
      <Input id="phone" name="phone" label="phone number" type="tel" />
      <Input id="address" name="address" label="Address" />
      <Input id="postalcode" name="postalcode" label="Postal Code" />
      <Input id="generallocation" name="generallocation" label="Country / Province / Region" />
      <br /> */}
      {/* <PaymentElement /> */}
      <CardElement />
      <input type="submit" />
    </form>
  )
}

export default function Cheakout (  ) {

  const stripePromise = loadStripe('pk_test_51MwroREgA8JjolxWMYB7IWSMu7UG2Ia14RvZoXZprltH0qyZIyc1tXxBdmAEtf3cbuEXcakpGA7fLou9PXUc2GxY00HPSYfJjE');
  // const { total, items } = useCustomContext();
  // const onSubmit: SubmitHandler<Inputs> = (data) => {
  // }

  return (
    <Layout>
      <Elements stripe={stripePromise}>
        <CheakoutForm />
      </Elements>
    </Layout>
  )
}