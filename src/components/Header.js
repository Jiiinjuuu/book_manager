function Header() {
    return (
      <header className="header">
        <div className="logo">깃허브솔트</div>
        <nav>
          <a href="#">도서목록</a>
          <a href="#">도서등록</a>
          <a href="#">MyPage</a>
          <button className="login-btn">Log in</button>
        </nav>
      </header>
    );
  }
  
  export default Header;
  