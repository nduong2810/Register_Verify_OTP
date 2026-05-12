import { Navigate, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import './App.css';

function Shell({ children }) {
  return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#dbeafe,_#f8fafc_55%)] px-4 py-10">
        <div className="mx-auto w-full max-w-3xl">
          <header className="mb-6 rounded-2xl border border-sky-100 bg-white/80 px-5 py-4 shadow-sm backdrop-blur">
            <h1 className="text-2xl font-bold text-slate-900">IT Forum</h1>
            <p className="mt-1 text-sm text-slate-600">Không gian hỏi đáp và chia sẻ kiến thức công nghệ.</p>
          </header>
          {children}
        </div>
      </div>
  );
}

function App() {
  return (
      <Shell>
        <Routes>

          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/register" element={<Navigate to="/auth/register" replace />} />

          <Route path="/auth/login" element={<div className="text-center p-8 bg-white rounded-xl shadow">Giao diện Đăng nhập (Sẽ làm sau)</div>} />

          <Route path="/" element={<Navigate to="/auth/register" replace />} />
        </Routes>
      </Shell>
  );
}

export default App;