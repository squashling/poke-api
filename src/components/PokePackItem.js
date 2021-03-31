import React from "react";

export const PokePackItem = props => {
  return (
    <div className="item-cell">
      <img src={props.item.sprites.default} alt="img" />
      <div className="item-cell-details">
        <div className="item-cell-name">{props.item.name}</div>
        <p>{props.item.quantity}</p>
        <div className="delete-item-quantity">
          <input onChange={props.onChange} value={props.value} type="number" />
          <div onClick={props.deleteItem}>D</div>
        </div>
        or
        <p onClick={props.deleteAll}>Delete All</p>
      </div>
    </div>
  );
};
