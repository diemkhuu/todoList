import React from "react";

const ItemEdit = (props) => {
  const { handleEditItem, setIdEdit, index, item } = props;
  const [title, setTitle] = React.useState("");

  const editTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleEdit = () => {
    handleEditItem(index, { name: title });
    setIdEdit("");
  };

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>
        <input type="text" className="form-control" defaultValue={item.name} onChange={(event) => editTitle(event)} />
      </td>
      <td className="text-right">
        <button type="button" className="btn btn-success btn-sm" onClick={handleEdit}>
          Lưu
        </button>
        <button type="button" className="btn btn-default btn-sm" onClick={() => setIdEdit("")}>
          Huỷ
        </button>
      </td>
    </tr>
  );
};

export default ItemEdit;
