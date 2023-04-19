import {
  ADD_ITEMS_TO_PREVIOUS_ORDER,
  ADD_ITEM_TO_CART,
  ADD_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_QUANTITY,
} from '../actionLabels';

const addItemToCart = payload => ({
  type: ADD_ITEM_TO_CART,
  payload,
});

const addQuantity = payload => ({
  type: ADD_QUANTITY,
  payload,
});

const removeQuantity = payload => ({
  type: REMOVE_QUANTITY,
  payload,
});

const removeItemFromCart = payload => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
});

const addItemToPreviousOrder = payload => ({
  type: ADD_ITEMS_TO_PREVIOUS_ORDER,
  payload,
});

export { addItemToCart, addQuantity, removeQuantity, removeItemFromCart, addItemToPreviousOrder };
