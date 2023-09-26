import { useEffect, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Layout from "../Layouts/Layout";
import PayPalButton from '../components/PayPalButton'
import useCustomContext from "../hooks/useCustomContext";
import CheakoutForm from '../components/forms/CheakoutForm';
import { useLocation } from "react-router-dom";

export default function Cheakout (  ) {

  const location = useLocation();
  const { total, items } = useCustomContext();
  const [step, setStep] = useState(() => Number(localStorage.getItem('checkoutStep')) || 1);

  const nextStep = (step: number) => {
    setStep(step);
  };

  // Guarda el paso en el localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('checkoutStep', String(step));
  }, [step]);

  useEffect(() => {
    if (location.pathname !== '/checkout') {
      // Si la URL no es '/checkout', borra 'checkoutStep' del localStorage
      localStorage.removeItem('checkoutStep');
    }
  }, [location]);

  return (
    <PayPalScriptProvider options={{ clientId: "AZhk2jzMsPtwP4hpeVIroDbfEl9ol3jBGJeC34i1ANpbDe9vKXUtScmAYLyf2CGGQId8efvKW5rYxF6G",  }}>
      <Layout>
        {
          step === 1 && 
          <section className="p-4 w-full overflow-y-scroll flex flex-col gap-4 items-center">
            <span className='mt-4 w-fit bg-neutral-950 text-neutral-100 px-4 py-2 rounded-lg text-xl tracking-widest font-semibold'>Step #1</span>
            <div className='w-full h-full flex flex-col gap-4 lg:flex-row-reverse'>
              <div className="lg:w-1/2 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  {
                    items.map((item) => (
                      <div key={item.id} className="bg-neutral-200 p-2 flex shadow-xl rounded-lg">
                        <img className="w-24" src={item.img_url} alt="" />
                        <div className="flex flex-col justify-center gap-4">
                          <h4>{item.name}</h4>
                          <div className="flex gap-3">
                            <span>{item.price}</span>
                            <span className="text-green-600">x {item.amount}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  <div className="flex items-center justify-between text-2xl">
                    <h3>Total:</h3>
                    <span>$ {total}</span>
                  </div>
                </div>
              </div>
              <CheakoutForm nextStep={nextStep} />
            </div>
          </section>
        }

        {
          step === 2 &&
          <section className='relative p-4 h-full w-full flex flex-col gap-4 items-center'>
            <button className="absolute left-4 top-4 bg-red-600" onClick={() => nextStep(1)}>last step</button>
            <span className='mt-4 bg-neutral-950 text-neutral-100 px-4 py-2 rounded-lg text-xl tracking-widest font-semibold'>Step #2</span>
            <h2 className='mt-10 font-extrabold tracking-widest text-2xl'>Metodos de pago</h2>
            <PayPalButton amount={total.toString()} invoice="Carrito" nextStep={nextStep} />
          </section>
        }

        {
          step === 3 &&
          <section className="w-full flex justify-center items-center">
            <p className="text-2xl font-semibold tracking-widest text-center">
              Pago completado, <br /> Proto te llegara un correo electronico con la factura
            </p>
          </section>
        }

      </Layout>
    </PayPalScriptProvider>
  )
}