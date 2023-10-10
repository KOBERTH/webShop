import { Elements } from "@stripe/react-stripe-js";
// import useCustomContext from "../hooks/useCustomContext";
// import { SubmitHandler, useForm } from 'react-hook-form';
import { loadStripe } from "@stripe/stripe-js";

import Layout from "../components/Layout";
import CheakoutForm from "../components/Cheakout/CheakoutForm";

export default function Cheakout (  ) {

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_APIKEY);
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