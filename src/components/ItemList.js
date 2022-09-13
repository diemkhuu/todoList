import React from "react";
import Item from "./Item";
import ItemEdit from "./ItemEdit";

const ItemList = (prop) => {
  const { itemList, handleDeleteItem, idEdit, setIdEdit, handleEditItem } = prop;

  return itemList.map((item, index) => {
    if (index === idEdit) {
      return <ItemEdit index={index} item={item} key={index} setIdEdit={setIdEdit} handleEditItem={handleEditItem} />;
    }
    return <Item index={index} item={item} key={index} handleDeleteItem={handleDeleteItem} setIdEdit={setIdEdit} />;
  });
};

export default ItemList;
