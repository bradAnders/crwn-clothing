import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer className="item-count">
        {cartItemsCount}
      </ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
