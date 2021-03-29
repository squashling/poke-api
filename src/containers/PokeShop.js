import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShopItems } from "redux/ducks/pokeshop";
import { buyÍtem } from "redux/ducks/pokepack";
import { ShopItem } from "components/ShopItem";
import { Button } from "components/Button";
import { Spinner } from "components/LoadingSpinner/Spinner";

export const PokeShop = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const shopList = useSelector(state => state.pokeshop.shopList);
  const shopLoading = useSelector(state => state.pokeshop.loading);

  useEffect(() => {
    dispatch(getShopItems(offset));
  }, [offset, dispatch]);

  const handleOnClick = btn => {
    if (btn === "next") setOffset(offset + 12);
    else if (offset !== 0) setOffset(offset - 12);
  };

  const handleBuyItem = item => {
    dispatch(buyÍtem(item));
  };

  return (
    <div className="grid-wrapper">
      <div className="item-wrapper" id="shop-item-wrapper">
        {shopLoading ? (
          <div className="shop-loading">
            <Spinner />
          </div>
        ) : (
          shopList.map((item, i) => (
            <ShopItem key={i} item={item} buyItem={() => handleBuyItem(item)} />
          ))
        )}
      </div>
      <div className="shop-button-wrapper">
        <Button
          label="prev"
          onClick={() => handleOnClick("prev")}
          disabled={offset === 0}
        />
        <Button label="next" onClick={() => handleOnClick("next")} />
      </div>
    </div>
  );
};
