import React from "react";

const Item = (prop) => {
  const { item, index, handleDeleteItem, setIdEdit } = prop;

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{item.name}</td>
      <td className="text-right">
        <button type="button" className="btn btn-warning btn-sm" onClick={() => setIdEdit(index)}>
          Sửa
        </button>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteItem(item.id)}>
          Xoá
        </button>
      </td>
    </tr>
  );
};

export default Item;
