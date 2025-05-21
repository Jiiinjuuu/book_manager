import { createContext, useState } from 'react';
import { flushSync } from 'react-dom';

export const BookContext = createContext();

export function BookProvider({ children }) {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks((prev) => [...prev, { ...book, id: Date.now() }]); // 더 안전한 ID
    };

    const removeBook = (id) => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    };

const handleRemove = (id) => {
    flushSync(() => {
    removeBook(id); // 즉시 반영 지시
});
};


    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}> {/* ✅ 여기에 반드시 포함 */}
        {children}
        </BookContext.Provider>
    );
}
