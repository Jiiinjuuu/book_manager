import React, { useContext } from 'react';
import './BookList.css';
import { BookContext } from '../contexts/BookContext';

function BookList() {
const { books, removeBook } = useContext(BookContext);

return (
<div className="book-list-page">
    <div className="book-list-container">
    <h2>📚 도서 목록</h2>
    <table className="book-table">
        <thead>
        <tr>
            <th>도서명</th>
            <th>저자</th>
            <th>상태</th>
            <th>비고</th>
        </tr>
        </thead>
        <tbody>
        {books.map((book) => {
            // 🔒 book이 유효하지 않으면 렌더링하지 않음
            if (!book || !book.id) return null;

            return (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className={book.status === '대출 중' ? 'unavailable' : 'available'}>
                {book.status}
                </td>
                <td>
                <button disabled={book.status === '대출 중'}>
                    {book.status === '대출 중' ? '대출 불가' : '대출하기'}
                </button>
                <button
                    onClick={() => {
                    const confirmDelete = window.confirm(`'${book.title}' 도서를 정말 삭제하시겠습니까?`);
                    if (confirmDelete) {
                        removeBook(book.id);
                    }
                    }}
                    style={{
                        marginLeft: '8px',
                        color: 'white',
                        backgroundColor: '#DA6C6C',
                    }}
                >등록 해제</button>
                </td>
            </tr>
            );
        })}
        </tbody>
    </table>
    </div>
</div>
);
}

export default BookList;
