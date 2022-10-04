import { createSelector } from "reselect";
import { createAction } from "../../utils/reducer/reducer.utils";
import { setCartItems } from "./cartSlice";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer], 
  (cart) => cart.cartItems
  );

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart)=>cart.isCartOpen
  );

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) =>cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0 )
  );

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0)
);


//Funcionality to Add Items to cart 

const addCartItem = (cartItems, productToAdd) => {
  // find if cartitems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems / new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(setCartItems, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(setCartItems, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(setCartItems, newCartItems);
};


