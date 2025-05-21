import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <main className="hero">
      <div className="hero-content">
        <h1>도서관리 프로그램</h1>
        <p>
          대출 도서 기간 확인, 독후감 조회 및 작성, 월별 대출 통계 등을 볼 수 있는 MyPage에<br />
          접근하려면 먼저 로그인해주세요.
        </p>
        <button onClick={() => navigate('/login')} className="main-btn">
          Log in
        </button>
      </div>
    </main>
  );
}

export default Hero;
