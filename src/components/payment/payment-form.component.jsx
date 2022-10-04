import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { selectCartTotal } from '../../features/cart/cart.selector';
import { selectCurrentUser } from '../../features/user/user.selector'


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  console.log('payment-form',currentUser)
  const  [isProcessingPayment, setIsProcessingPayment ] = useState(false);
 
  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

   setIsProcessingPayment(true)
    
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(response)

  const { paymentIntent: { client_secret }} = response;
  console.log(response)

const paymentResult = await stripe.confirmCardPayment(client_secret, {
  payment_method: {
    card: elements.getElement(CardElement),
    billing_details: {
      name: currentUser ? currentUser.displayName : 'Guest'
    },
  },
});

setIsProcessingPayment(false);

if( paymentResult.error) {
    alert(paymentResult.error);
} else {
  if(paymentResult.paymentIntent.status === 'succeeded'){
    alert('Payment Successful');
  }

}

}

    return (
      <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
          <h3>Credit Card Payment</h3>
          <CardElement />
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPES_CLASSES.inverted}
          >
            Pay now
          </PaymentButton>
        </FormContainer>
      </PaymentFormContainer>
    );
}


export default PaymentForm