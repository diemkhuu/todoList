import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import { removeAccents } from "./util/string";
import Title from "./components/Title";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Search from "./components/Search";
import Items from "./data/Items";

const App = () => {
  const [itemList, setItemList] = React.useState([]);
  const [searchList, setSearchList] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [idEdit, setIdEdit] = React.useState("");
  const list = isSearching ? searchList : itemList;

  const handleAddItem = (title) => {
    const newList = [...itemList, { id: uuidv4(), name: title }];
    setItemList(newList);
  };

  const handleEditItem = (id, item) => {
    const newList = [...itemList];
    newList.map((el) => {
      if (el.id === id) {
        el.name = item;
      }
    });

    setItemList(newList);
  };

  const handleDeleteItem = (id) => {
    if (isSearching) {
      const newSearchList = searchList.filter((item) => item.id !== id);
      setSearchList(newSearchList);
    }

    const newList = itemList.filter((item) => item.id !== id);
    setItemList(newList);
  };

  const handleSearchItem = (title) => {
    if (title) {
      const newList = itemList.filter((item) => {
        const newStr = removeAccents(item.name);

        return newStr.includes(title.toLowerCase());
      });
      setIsSearching(true);
      return setSearchList(newList);
    }
    setIsSearching(false);
    return setSearchList([]);
  };

  // componentDidMount
  React.useEffect(() => {
    console.log("mounted");
    setItemList(Items);
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
          <Form handleAddItem={handleAddItem} />
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
            <ItemList itemList={list} handleDeleteItem={handleDeleteItem} idEdit={idEdit} setIdEdit={setIdEdit} handleEditItem={handleEditItem} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
