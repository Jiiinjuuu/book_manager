import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Login from './pages/Login';
import './index.css';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
}
  
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />  {/* ✅ 수정된 경로 */}
    </Routes>
  );
}

export default App;
