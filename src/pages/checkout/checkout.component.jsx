import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, cartTotal }) =>  (
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
    {
      cartItems.map(cartItem =>
        ( <CheckoutItem  key={ cartItem.id } cartItem={ cartItem } /> )
      )
    }
    <TotalContainer>
      <span>TOTAL: ${ cartTotal }</span>
    </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/22 - CVC 123
    </WarningContainer>
    <StripeCheckoutButton  price={ cartTotal } />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);