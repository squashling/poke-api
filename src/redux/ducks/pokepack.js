import axios from "axios";
import { BUY_ITEM } from "redux/types";

const buyÍtem = item => {
  return {
    type: BUY_ITEM,
    item
  };
};

const initialState = {
  packList: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case BUY_ITEM:
      console.log(action.item);
      return {
        ...state
        // packList: state.packList.concat(action.item)
      };

    default:
      return state;
  }
}
