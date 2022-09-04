import "./App.css";
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Items from "./data/Items";
import { removeAccents } from "./util/string";

const App = () => {
  const [listItem, setListItem] = React.useState([]);
  const [searchListItem, setSearchListItem] = React.useState([]);
  const [idEdit, setIdEdit] = React.useState("");
  const list = searchListItem.length > 0 ? searchListItem : listItem;

  const handleDelete = (index) => {
    const newList = listItem.filter((item, idx) => idx !== index);

    setListItem(newList);
  };

  const handleEditItem = (index, item) => {
    const newList = [...listItem];
    newList[index] = item;

    setListItem(newList);
  };

  const handleSearchItem = (title) => {
    if (title) {
      const newList = listItem.filter((item) => {
        const newStr = removeAccents(item.name);

        return newStr.includes(title.toLowerCase());
      });
      return setSearchListItem(newList);
    }
    return setSearchListItem([]);
  };

  // componentDidMount
  React.useEffect(() => {
    console.log("mounted");
    setListItem(Items);
  }, []);

  return (
    <div className="container">
      {console.log("render")}
      <Title />
      <div className="row mb-4">
        <div className="col">
          <Search handleSearchItem={handleSearchItem} />
        </div>
        <div className="col">
          <Form setItem={setListItem} listItem={listItem} />
        </div>
      </div>
      <div className="panel panel-success">
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Tiêu đề</th>
              <th style={{ width: "15%" }}></th>
            </tr>
          </thead>
          <tbody>
            <ListItem listItem={list} handleDelete={handleDelete} idEdit={idEdit} setIdEdit={setIdEdit} handleEditItem={handleEditItem} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
