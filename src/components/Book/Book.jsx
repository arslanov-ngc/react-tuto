import { useState } from "react";
import Counter from "./Counter";

import "./css/Book.css";

export const Book = ({ src, title, author }) => {
  const [txtTitle, setTxtTitle] = useState(title);

  const titleChangeHandler = () => {
    setTxtTitle("New Book");
  };

  const titleResetHandler = () => {
    setTxtTitle(title);
  };

  return (
    <div className="book">
      <img className="book__img" src={src} alt="Book Img" />
      <div className="book__desc">
        <h3>{txtTitle}</h3>
        <p>{author}</p>
        <div className="line"></div>
        <div className="flex__group">
          <button className="btn" onClick={titleChangeHandler}>
            Change Title
          </button>
          <button className="btn" onClick={titleResetHandler}>
            Reset Title
          </button>
        </div>
        <Counter />
      </div>
    </div>
  );
};
