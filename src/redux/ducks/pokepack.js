import axios from "axios";
import { BUY_ITEM, DELETE_ITEM, DELETE_ALL } from "redux/types";

export const buyÍtem = item => {
  console.log(item);
  return {
    type: BUY_ITEM,
    item
  };
};
export const deleteItem = (item, quantity) => {
  console.log(item, quantity);
  return {
    type: DELETE_ITEM,
    item,
    quantity
  };
};
export const deleteAll = item => {
  return {
    type: DELETE_ALL,
    item
  };
};

const initialState = {
  packList: []
};

export default function reducer(state = initialState, action = {}) {
  let packList = [...state.packList];
  let foundItem = null;
  if (action.item && action.item.name)
    foundItem = packList.find(item => item.name === action.item.name);
  switch (action.type) {
    case BUY_ITEM:
      if (foundItem) foundItem.quantity++;
      else packList.push({ ...action.item, quantity: 1 });
      return {
        ...state,
        packList
      };
    case DELETE_ITEM:
      if (foundItem.quantity - action.quantity < 1)
        packList.splice(packList.indexOf(foundItem), 1);
      else foundItem.quantity = foundItem.quantity - action.quantity;
      return {
        ...state,
        packList
      };
    case DELETE_ALL:
      packList.splice(packList.indexOf(foundItem), 1);
      return {
        ...state,
        packList
      };

    default:
      return state;
  }
}
