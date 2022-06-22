import { useState } from "react";

import "./css/BookAdder.css";

const BookAdder = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newImgSrc, setNewImgSrc] = useState("");

  const addTitleHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const addAuthorHandler = (e) => {
    setNewAuthor(e.target.value);
  };

  const addImgSrcHandler = (e) => {
    setNewImgSrc(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const newBook = {
      title: newTitle,
      author: newAuthor,
      imgSrc: newImgSrc,
    }

    console.log(newBook);
  }

  return (
    <div className="BookAdder">
      <h3 className="adder__title">Add Book</h3>
      <form className="adder__controls" onSubmit={submitHandler}>
        <div className="adder__control">
          <label>Title</label>
          <input type="text" onChange={addTitleHandler}/>
        </div>
        <div className="adder__control">
          <label>Author</label>
          <input type="text" onChange={addAuthorHandler}/>
        </div>
        <div className="adder__control">
          <label>Image Source</label>
          <input type="text" onChange={addImgSrcHandler}/>
        </div>
        <input type="submit" className="btn" value={"Add Book"} />
      </form>
    </div>
  );
};

export default BookAdder;
