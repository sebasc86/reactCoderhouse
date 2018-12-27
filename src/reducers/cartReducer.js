const ADD_TO_CART = "ADD_TO_CART";

let cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.concat(action.product);
      break;
    default:
      return state;
      break;
  }
};

export default cartReducer;
