import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import publicKey from "./stripe-button.key";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log("Payment response: ", response);
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please be sure you use the provided credit cart"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
      bitcoin
    />
  );
};

export default StripeCheckoutButton;
