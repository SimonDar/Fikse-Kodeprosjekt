import { paymentIntent } from "../../utils/stripe/payment-intent-utils";

  const checkout = async () => {
    try {
      const client_secret: unknown = await paymentIntent(
        'http://127.0.0.1:8000/secret', cartTotal
      )
      navigate('/checkout', {
        state: {
          client_secret
        }
      })
    } catch (error) {
      alert('An error has occurred; try again later!')
    }
  };
