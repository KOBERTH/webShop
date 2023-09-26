import { PayPalButtons } from "@paypal/react-paypal-js";
import { saveOrder } from "../api/Post";

function 
PayPalButton ({invoice, amount, nextStep}: {invoice: string, amount: string, nextStep: (step: number) => void}) {

  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '');
  const productIds = cartItems.map((item: { id: string; }) => item.id);
  const formData = JSON.parse(localStorage.getItem('formData') || '') || {};

  return (
    <PayPalButtons className="max-h-full w-full lg:w-2/4 z-30"  createOrder={(_data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: invoice,
            amount: {
              value: amount,
            },
          }],
        });
      }} 
      onApprove={ async (_data, actions) => {
        const order = await actions.order?.capture()
        if (order?.status === "COMPLETED" || order?.status === "APPROVED") {
          const purchaseDetails: PurchaseDetailsProps = {
            user_data: {
              name: formData?.name,
              address: formData?.address,
              phone: formData?.celular,
              user_id: formData?.cedula
            },
            home_address: {
              province: formData?.provincia,
              canton: formData?.canton,
              district: formData?.distrito,
              exact_address: formData?.address
            },
            payment_details: {
              id: order.id,
              create_time: order.create_time,
              payer: {
                payer_id: order.payer.payer_id,
                email_address: order.payer.email_address,
                name: {
                  given_name: order.payer.name?.given_name,
                  surname: order.payer.name?.surname
                },
                address: order.payer.address?.country_code
              },
              purchase_units: {
                amount: order.purchase_units[0].amount.value,
                description: order.purchase_units[0].description
              }
            },
            products: productIds
          }
          const data = await saveOrder(purchaseDetails)
          if (data.message) {
            localStorage.removeItem('formData');
            setTimeout(() => {
              nextStep(3)
            }, 2000)
          }
        } else {
          console.log('La orden no fue capturada');
        }
      }} 
    />
  )
}

export default PayPalButton