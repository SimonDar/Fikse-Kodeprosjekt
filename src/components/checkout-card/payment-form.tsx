import { useContext, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { CartContext } from "../../context/cart-context/cart-context";
  import { Elements } from '@stripe/react-stripe-js';
  import { loadStripe } from '@stripe/stripe-js';
  import PaymentForm from "../payment-form/payment-form";

  /*
    Type assertion to load your Stripe publishable key from the .env file.
    Eliminate this if you have problems and put your publishable key directly
    into the loadStripe function.
  */
  const nodeEnv: string = (process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string);

  const stripePromise = loadStripe(nodeEnv);

  export type StripeTypes = {
    clientSecret: string;
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: string
      }
    }
  };

  const CheckoutCard = ({ secret }:any) => {
    const { cartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!stripePromise || !secret) {
        navigate('/')
      }
    }, [secret, navigate])

    const options: StripeTypes = {
      // pass the client secret
      clientSecret: secret,
      // Fully customizable with appearance API.
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#008b8b'
        }
      },
    };

    return (
      <div className="relative mx-3 rounded-lg border shadow-sm tablet:w-80 tablet:float-right laptop:mx-20">
        <div className="m-5">
          <h5 className="mb-2 pb-3 border-b border-gray-300 text-center text-2xl font-bold tracking-tight text-gray-900">Checkout</h5>
          <div className="grid grid-cols-2 text-center">
            <div>
              Subtotal:
              <div>
                <div>
                  Shipping:
                </div>
                <div>
                  Total:
                </div>
              </div>
            </div>
            <div>
              ${cartTotal}
              <div>
                <div>
                  $0
                </div>
                <div>
                  ${cartTotal}
                </div>
              </div>
            </div>
          </div>
        {secret &&
          <Elements stripe={stripePromise} options={options}>
            <PaymentForm />
          </Elements>
        }
        </div>
      </div>
    )
  }
  export default CheckoutCard;