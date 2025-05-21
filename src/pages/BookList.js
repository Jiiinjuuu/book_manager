// import React, { useContext } from 'react';
// import './BookList.css';
// import { BookContext } from '../contexts/BookContext';
// import { useNavigate } from 'react-router-dom';

// function BookList() {
// const { books, removeBook, addToMyBooks } = useContext(BookContext);
// const navigate = useNavigate();
// return (
// <div className="book-list-page">
//     <div className="book-list-container">
//     <h2>📚 도서 목록</h2>
//     <table className="book-table">
//         <thead>
//         <tr>
//             <th>도서명</th>
//             <th>저자</th>
//             <th>상태</th>
//             <th>비고</th>
//         </tr>
//         </thead>
//         <tbody>
//         {books.map((book) => {
//             // 🔒 book이 유효하지 않으면 렌더링하지 않음
//             if (!book || !book.id) return null;

//             return (
//             <tr key={book.id}>
//                 <td>{book.title}</td>
//                 <td>{book.author}</td>
//                 <td className={book.status === '대출 중' ? 'unavailable' : 'available'}>
//                 {book.status}
//                 </td>
//                 <td>
//                 <button
//                 disabled={book.status === '대출 중'}
//                 onClick={() => {
//                     if (book.status !== '대출 중') {
//                     addToMyBooks(book); // ✅ 대출 목록에 추가
//                     navigate('/mybooks'); // ✅ 페이지 이동
//                     }
//                 }}
//                 > console.log("대출한 도서:", book);
//                 {book.status === '대출 중' ? '대출 불가' : '대출하기'}
//                 </button>


//                 <button
//                     onClick={() => {
//                     const confirmDelete = window.confirm(`'${book.title}' 도서를 정말 삭제하시겠습니까?`);
//                     if (confirmDelete) {
//                         removeBook(book.id);
//                     }
//                     }}
//                     style={{
//                         marginLeft: '8px',
//                         color: 'white',
//                         backgroundColor: '#DA6C6C',
//                     }}
//                 >등록 해제</button>
//                 </td>
//             </tr>
//             );
//         })}
//         </tbody>
//     </table>
//     </div>
// </div>
// );
// }

// export default BookList;

import React, { useContext } from 'react';
import './BookList.css';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';

function BookList() {
const { books, removeBook, addToMyBooks } = useContext(BookContext);
const navigate = useNavigate();

return (
    <div className="book-list-page">
    <div className="book-list-container">
        <h2>📚 도서 목록</h2>
        
        {/* 도서 등록 버튼 추가 */}
        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
            <button
                className="register-button"
                onClick={() => navigate('/BookRegister')}>
                + 도서 등록
            </button>

            <button
                className="mybook-button"
                onClick={() => navigate('/mybooks')}>
                내 서재
            </button>
            
            <button
                className="home-button"
                onClick={() => navigate('/')}>
                🏠 홈으로
            </button>
        </div>

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
            if (!book || !book.id) return null;

            return (
                <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className={book.status === '대출 중' ? 'unavailable' : 'available'}>
                    {book.status}
                </td>
                <td>
                    <button
                    disabled={book.status === '대출 중'}
                    onClick={() => {
                        if (book.status !== '대출 중') {
                        addToMyBooks(book);
                        navigate('/mybooks');
                        }
                    }}
                    >
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
                        backgroundColor: '#E53E3E',
                    }}
                    >
                    도서 삭제
                    </button>
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
