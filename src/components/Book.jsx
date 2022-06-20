import "./Book.css";

export const Book = ({ src, title, author }) => {
  return (
    <div className="book">
      <img className="book__img" src={src} alt="Book title" />
      <div className="book__desc">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};
