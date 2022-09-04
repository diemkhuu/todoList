import React from "react";
import Item from "./Item";
import ItemEdit from "./ItemEdit";

const ListItem = (prop) => {
  const { listItem, handleDelete, idEdit, setIdEdit, handleEditItem } = prop;

  return listItem.map((item, index) => {
    if (index === idEdit) {
      return <ItemEdit index={index} item={item} key={index} setIdEdit={setIdEdit} handleEditItem={handleEditItem} />;
    }
    return <Item index={index} item={item} key={index} handleDelete={handleDelete} setIdEdit={setIdEdit} />;
  });
};

export default ListItem;
