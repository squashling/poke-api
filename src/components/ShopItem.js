import React from "react";
import { Gem } from "assets/gem";
import { Button } from "./Button";

export const ShopItem = props => {
  return (
    <div className="shop-item">
      <img src={props.item.sprites.default} alt="img" />
      <div className="shop-item-details">
        <div className="shop-item-name">{props.item.name}</div>
        <div className="shop-item-cost">
          {props.item.cost}
          <Gem />
        </div>
        <div className="shop-item-buy">
          <Button label="buy" onClick={() => console.log("click")} />
        </div>
      </div>
    </div>
  );
};
