// import { createContext, useState } from 'react';

// export const BookContext = createContext();

// export function BookProvider({ children }) {
//   const [books, setBooks] = useState([]);
//   const [myBooks, setMyBooks] = useState([]);

//   const addBook = (book) => {
//     setBooks((prev) => [...prev, { ...book, id: Date.now(), status: '대출 가능' }]);
//   };

//   const removeBook = (id) => {
//     setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
//   };

//   const addToMyBooks = (book) => {
//     setMyBooks((prev) => [...prev, book]);
//     setBooks((prevBooks) =>
//       prevBooks.map((b) =>
//         b.id === book.id ? { ...b, status: '대출 중' } : b
//       )
//     );
//   };

//   return (
//     <BookContext.Provider value={{ books, myBooks, addBook, removeBook, addToMyBooks }}>
//       {children}
//     </BookContext.Provider>
//   );
// }

import { createContext, useState } from 'react';

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prev) => [...prev, { ...book, id: Date.now(), status: '대출 가능' }]);
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  const addToMyBooks = (book) => {
    setMyBooks((prev) => [...prev, book]);
    setBooks((prevBooks) =>
      prevBooks.map((b) =>
        b.id === book.id ? { ...b, status: '대출 중' } : b
      )
    );
    console.log("대출한 도서:", book);
  };

  return (
    <BookContext.Provider value={{
      books,
      addBook,
      removeBook,
      addToMyBooks,
      myBooks, // ✅ 꼭 포함
    }}>
      {children}
    </BookContext.Provider>
  );
}
