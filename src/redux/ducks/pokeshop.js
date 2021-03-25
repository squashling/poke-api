import axios from "axios";
import { SET_SHOP_ITEMS, SET_SHOP_LOADING } from "redux/types";

export const getShopItems = offset => {
  return dispatch => {
    dispatch(setShopLoading(true));
    return axios
      .get(process.env.REACT_APP_API_HOST + "item?limit=12&offset=" + offset)
      .then(res => {
        let requests = res.data.results.map(item => axios.get(item.url));
        Promise.all(requests)
          .then(values => {
            let shopItems = values.map(item => item.data);
            dispatch(setShopItems(shopItems));
            setTimeout(() => dispatch(setShopLoading(false)), 200);
          })
          .catch(err => dispatch(setShopLoading(false)));
      })
      .catch(err => dispatch(setShopLoading(false)));
  };
};

const setShopItems = shopList => {
  return {
    type: SET_SHOP_ITEMS,
    shopList
  };
};

const setShopLoading = loading => {
  return {
    type: SET_SHOP_LOADING,
    loading
  };
};

const initialState = {
  shopList: [],
  loading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SHOP_ITEMS:
      return {
        ...state,
        shopList: action.shopList
      };
    case SET_SHOP_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}
