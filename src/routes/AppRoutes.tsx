import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoginPage   from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import DashboardPage from '../pages/Dashboard';

export default function AppRoutes() {
    const { token } = useAuth();

    return (
        <Routes>
            <Route path="/login"    element={token ? <Navigate to="/" /> : <LoginPage />} />
            <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />

            <Route path="/" element={token ? <DashboardPage /> : <Navigate to="/login" /> } />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}