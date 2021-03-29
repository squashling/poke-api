import React from "react";
import { Gem } from "assets/gem";
import { Button } from "./Button";

export const ShopItem = props => {
  return (
    <div className="item-cell">
      <img src={props.item.sprites.default} alt="img" />
      <div className="item-cell-details">
        <div className="item-cell-name">{props.item.name}</div>
        <p>
          {props.item.cost}
          <Gem />
        </p>
        <div className="item-cell-buy">
          <Button label="buy" onClick={props.buyItem} />
        </div>
      </div>
    </div>
  );
};
