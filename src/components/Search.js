import React from "react";

const Search = (props) => {
  const { handleSearchItem } = props;
  const [title, setTitle] = React.useState("");

  const searchTitle = (event) => {
    setTitle(event.target.value);
    // handleSearchItem(title);
  };

  // componentDidUpdate
  React.useEffect(() => {
    handleSearchItem(title);
  }, [title]);

  return (
    <div className="form-inline">
      <div className="form-group">
        <input value={title} type="text" className="form-control" placeholder="Search item name" onChange={(event) => searchTitle(event)} />
      </div>
    </div>
  );
};

export default Search;
