import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: ${cartTotal}</span>
      </TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVC 123
      </WarningContainer>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
