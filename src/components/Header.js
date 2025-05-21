import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
    return (
      <header className="header">
        <div className="logo">깃허브솔트</div>
        <nav>
          <a onClick={() => navigate('/BookList')}>도서목록</a>
          <a onClick={() => navigate('/BookRegister')}>도서등록</a>
          <button onClick={() => navigate('/login')} className="login-btn">Log in</button>
        </nav>
      </header>
    );
  }
  
  export default Header;
  