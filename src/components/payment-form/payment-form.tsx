import { useState, FormEvent, ChangeEvent } from 'react';
  import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
  import Button from '../button/button';
  // Create a form input component
  import FormInput from '../form-input/form-input';

  const defaultFormFields = {
    displayName: '',
    email: ''
  }

  const PaymentForm = () => {
    const elements = useElements();
    const stripe = useStripe();
    const [isProcessingPayment, setIsProcessingPayment ] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email } = formFields;

    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      setIsProcessingPayment(true);

      const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // redirect to route thankyou
          return_url: 'http://localhost:3000/thankyou/',
          payment_method_data: {
            billing_details: {
              name: displayName,
              email: email,
              phone: '7873679090',
              address: {
                line1: 'Example Building #129',
                city: 'Carolina',
                state: 'PR',
                postal_code: '00987',
                country: 'US'
              }
            }
          }
        },
      });

      setIsProcessingPayment(false);

      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message);
      } else {
        // Your customer will be redirected to your `return_url`. For some payment
        // methods like iDEAL, your customer will be redirected to an intermediate
        // site first to authorize the payment, then redirected to the `return_url`.
      }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    return (
      <div className='mt-3'>
        <form onSubmit={paymentHandler}>
          {/* Collect More User Info */}
          <FormInput
            label="Name"
            type="text"
            required
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <PaymentElement />
          {errorMessage &&
            <div className='text-pink-500 p-2
              rounded-md mt-2 bold bg-pink-100'
            >
              {errorMessage}
            </div>}
          {/* isLoading will disable the button on its first click. */}
          <Button
            isLoading={isProcessingPayment}
            type='submit'
            buttonClass='w-full'
          >
            Pay
          </Button>
        </form>
      </div>
    )
  };

  export default PaymentForm;
