import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, deleteAll } from "redux/ducks/pokepack";
import { PokePackItem } from "components/PokePackItem";
import { useInputs } from "hooks/useInputs";

export const PokePack = () => {
  const dispatch = useDispatch();
  const [deleteInputList, setDeleteInputList] = useState(null);
  const pokePackItemList = useSelector(state => state.pokepack.packList);

  const [inputList, inputs] = useInputs({
    inputs: pokePackItemList,
    type: "number"
  });

  // const onChangeDeleteQuantity = (value, name) => {
  //   setDeleteQuantity(deleteQuantity => {
  //     deleteQuantity[name] = value;
  //     return deleteQuantity;
  //   });
  // };

  // const handleDeleteItem = item => {
  //   dispatch(deleteItem(item, deleteQuantity[item.name]));
  //   //TODO SET NEW VALUE
  // };

  console.log(inputList, inputs);

  return (
    <div className="grid-wrapper">
      <div className="item-wrapper" id="poke-pack-item-wrapper">
        {inputs &&
          inputs.map(input => {
            return input;
          })}
        {/* {input}
        {pokePackItemList.length > 0 &&
          pokePackItemList.map((item, i) => (
            <PokePackItem
              key={i}
              item={item}
              vaue={deleteQuantity[item.name]}
              onChange={e => onChangeDeleteQuantity(e.target.value, item.name)}
              deleteItem={() => handleDeleteItem(item)}
            />
          ))} */}
      </div>
    </div>
  );
};
