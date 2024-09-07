import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(  async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  },[]);

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", { title });
    setBooks([...books, res.data]);
  };

  const deleteBook = async (id) => {
    const res = await axios.delete("http://localhost:3001/books/" + id);
    setBooks([...books.filter((book) => book.id !== id)]);
    return res;
  };

  const editeBook = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          return { ...book, ...res.data };
        }
        return book;
      }),
    ]);
  };

  const valueToShare={
    books,
    fetchBooks,
    createBook,
    deleteBook,
    editeBook
  }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}
export { Provider };
export default BooksContext;
