import React from "react";

const Form = (props) => {
  const { handleAddItem } = props;
  const [title, setTitle] = React.useState("");

  const addNewTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      handleAddItem(title);
      setTitle("");
    }
  };

  // componentWillReceiveProps
  React.useEffect(() => {
    console.log("mounted or updated");
  });

  return (
    <form className="form-inline float-right" onSubmit={(event) => handleSubmit(event)}>
      <div className="form-group">
        <input value={title} type="text" className="form-control" placeholder="Tiêu đề" onChange={(event) => addNewTitle(event)} />
      </div>
      <button type="button" className="btn btn-success ml-3" onClick={(event) => handleSubmit(event)}>
        Nhập
      </button>
    </form>
  );
};

export default Form;
