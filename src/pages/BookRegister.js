import React from 'react'; // 안전하게 추가
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../contexts/BookContext';
import "./BookRegister.css";

function BookRegister() {
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const { addBook } = useContext(BookContext);
const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();
addBook({ title, author, status: '대출 가능' });
navigate('/BookList');
};

return (
<div className="register-background">
    <form className="register-form" onSubmit={handleSubmit}>
        <h2>📘 도서 등록</h2>
        <input
        placeholder="도서명"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input
        placeholder="저자"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">등록</button>
    </form>
</div>
)
}

export default BookRegister;
