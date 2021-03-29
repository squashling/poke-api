import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, deleteAll } from "redux/ducks/pokepack";
import { PokePackItem } from "components/PokePackItem";

export const PokePack = () => {
  const dispatch = useDispatch();
  const [pokePackItems, setPokePackItem] = useState([]);
  const [deleteQuantity, setDeleteQuantity] = useState({});
  const pokePackItemList = useSelector(state => state.pokepack.packList);

  useEffect(() => {
    setPokePackItem(pokePackItemList);
  }, [pokePackItems]);

  const onChangeDeleteQuantity = (value, name) => {
    setDeleteQuantity(deleteQuantity => {
      deleteQuantity[name] = value;
      return deleteQuantity;
    });
  };

  const handleDeleteItem = item => {
    dispatch(deleteItem(item, deleteQuantity[item.name]));
    setDeleteQuantity(deleteQuantity => {
      deleteQuantity[item.name] = "";
      return deleteQuantity;
    });
    //TODO SET NEW VALUE
  };

  return (
    <div className="grid-wrapper">
      <div className="item-wrapper" id="poke-pack-item-wrapper">
        {pokePackItems.length > 0 &&
          pokePackItems.map((item, i) => (
            <PokePackItem
              key={i}
              item={item}
              vaue={deleteQuantity[item.name]}
              onChange={e => onChangeDeleteQuantity(e.target.value, item.name)}
              deleteItem={() => handleDeleteItem(item)}
            />
          ))}
      </div>
    </div>
  );
};
