import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, deleteAll } from "redux/ducks/pokepack";
import { PokePackItem } from "components/PokePackItem";
import { useInputs } from "hooks/useInputs";

export const PokePack = () => {
  const dispatch = useDispatch();
  const pokePackItemList = useSelector(state => state.pokepack.packList);

  const [inputs] = useInputs({
    inputs: pokePackItemList,
    type: "number"
  });

  const handleDeleteItem = item => {
    console.log(item);
  };

  return (
    <div className="grid-wrapper">
      <div className="item-wrapper" id="poke-pack-item-wrapper">
        {pokePackItemList.length > 0 &&
          pokePackItemList.map((item, i) => {
            console.log(item, inputs);
            let foundInput = inputs.find(input => input.name === item.name);
            return (
              <PokePackItem
                key={i}
                item={item}
                deleteItem={() => handleDeleteItem(item)}
                input={foundInput}
              />
            );
          })}
      </div>
    </div>
  );
};
