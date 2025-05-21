import { Routes, Route } from 'react-router-dom';
import { BookProvider } from './contexts/BookContext';

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Login from './pages/Login';
import BookList from './pages/BookList';
import BookRegister from './pages/BookRegister';
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
    <BookProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />  {/* ✅ 수정된 경로 */}
        <Route path="/BookList" element={<BookList />} />  {/* ✅ 수정된 경로 */}
        <Route path="/BookRegister" element={<BookRegister />} />  {/* ✅ 수정된 경로 */}
      </Routes>
    </BookProvider>
  );
}

export default App;
