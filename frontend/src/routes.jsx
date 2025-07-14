import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import History from "./pages/History"

export function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/history" element={<History />}/>
        </Routes>
        </BrowserRouter>
    );
}