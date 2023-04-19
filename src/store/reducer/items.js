import {
  ADD_ITEMS_TO_PREVIOUS_ORDER,
  ADD_ITEM_TO_CART,
  ADD_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_QUANTITY,
} from '../actionLabels';

const initialState = {
  cart: [],
  previousOrder: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case REMOVE_ITEM_FROM_CART:
      return { ...state, cart: state.cart.filter(x => x.id !== payload) };
    case ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload
            ? {
                ...item,
                itemCount: item.itemCount + 1,
              }
            : item,
        ),
      };
    case REMOVE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === payload
            ? {
                ...item,
                itemCount: item.itemCount - 1,
              }
            : item,
        ),
      };
    case ADD_ITEMS_TO_PREVIOUS_ORDER:
      return { ...state, previousOrder: payload, cart: [] };
    default:
      return state;
  }
};
