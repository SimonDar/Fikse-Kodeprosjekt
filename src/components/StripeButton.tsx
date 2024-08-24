import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Replace this with your own publishable key from the Stripe Dashboard
const stripePromise = loadStripe('pk_test_LMojdMM5YHEPepd4MM3Jx7hm');

const StripeButton: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeButton;
