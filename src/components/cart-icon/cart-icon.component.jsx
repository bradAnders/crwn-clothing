import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import CartContext from "../../contexts/cart/cart.contexts";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);
  return (
    <CartContainer onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer className="item-count">
        {itemCount}
      </ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
