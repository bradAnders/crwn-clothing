import { createSelector } from 'reselect';

// Input selector
const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

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

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, item) => {
        return acc + item.quantity * item.price
      },
    0
  )
)