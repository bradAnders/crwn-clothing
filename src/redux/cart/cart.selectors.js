import { createSelector } from 'reselect';
import { createStore } from 'redux';

// Input selector
const selectCart = state => state.cart;

// Memoized selector (Output selector)
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// Memoized selector (Output selector)
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, item) => {
        return acc + item.quantity
      },
    0
  )
)