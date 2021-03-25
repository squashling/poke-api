import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShopItems } from "redux/ducks/pokeshop";
import { ShopItem } from "components/ShopItem";
import { Button } from "components/Button";
import { Spinner } from "components/LoadingSpinner/Spinner";

export const PokeShop = () => {
  const [offset, setOffset] = useState(0);

  const shopList = useSelector(state => state.pokeshop.shopList);
  const shopLoading = useSelector(state => state.pokeshop.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopItems(offset));
  }, [offset, dispatch]);

  const handleOnClick = btn => {
    if (btn === "next") setOffset(offset + 12);
    else if (offset !== 0) setOffset(offset - 12);
  };

  return (
    <div className="shop-wrapper">
      <div className="shop-items-wrapper">
        {shopLoading ? (
          <div className="shop-loading">
            <Spinner />
          </div>
        ) : (
          shopList.map((item, i) => <ShopItem key={i} item={item} />)
        )}
      </div>
      <div className="shop-button-wrapper">
        <Button label="prev" onClick={handleOnClick} disabled={offset === 0} />
        <Button label="next" onClick={handleOnClick} />
      </div>
    </div>
  );
};
