import cart from "./cartReducer";
import total from "./totalReducer";
import products from "./productReducer";
import preview from "./previewReducer";
import { combineReducers } from "redux";

let previewItem = function (state = {}, action) {
  switch (action.type) {
    case 'SET_ITEM':
      state = action.item
    break  

    case 'UNSET_ITEM':
     state = {}
    break
   }
}

export default combineReducers({
  previewItem,
  total: total,
  cart: cart,
  products: products,
});
