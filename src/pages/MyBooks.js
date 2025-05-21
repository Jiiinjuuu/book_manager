import "./MyBooks.css";
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';

function MyBooks() {
  const { myBooks } = useContext(BookContext);
  const navigate = useNavigate();

  return (
    <div className="mybooks-page">
      <div className="mybooks-container">
        <h2>📚 내 도서 대출 목록</h2>
                {/* ✅ 여기 버튼 삽입 */}
                <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <button
            className="BookList-button"
            onClick={() => navigate('/BookList')}
          >
            도서 목록
          </button>

          <button
            className="home-button"
            onClick={() => navigate('/')}
          >
            🏠 홈으로
          </button>
        </div>

        {myBooks?.length === 0 ? (
          <p>아직 대출한 도서가 없습니다.</p>
        ) : (
          <ul>
            {myBooks.map((book) => (
              <li key={book.id}>
                {book.title} - {book.author}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default MyBooks;
