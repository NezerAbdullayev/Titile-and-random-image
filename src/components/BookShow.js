import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [show, setShow] = useState(false);
  const { deleteBook } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };
  const handleEditClick = () => {
    setShow(!show);
  };
  const handleSubmit = () => {
    setShow(false);
  };

  return (
    <>
      <div className="book-show">
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="books"
        />
        {show ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title}
        <div className="actions">
          <button onClick={handleEditClick} className="edit">
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default BookShow;
