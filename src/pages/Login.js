import "./Login.css";

function Login() {
  return (
    <div className="logback">
      <div className="login-container">
        <div className="login-box">
          <h2>로그인</h2>
          <p className="welcome-msg">재방문을 환영합니다.</p>

          <form>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="이메일 입력" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input type="password" id="password" placeholder="비밀번호 입력" required />
            </div>

            <button type="submit" className="login-button">로그인</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login; // ✅ 꼭 있어야 함
