import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import publicKey from './stripe-button.key';

const onToken = token => {
  console.log(token);
  alert('Payment successful')
}

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${ price }`}
      amount={ priceForStripe }
      panelLabel='Pay Now'
      token={ onToken }
      stripeKey={ publicKey }
      bitcoin
    />
  );
}
 
export default StripeCheckoutButton;