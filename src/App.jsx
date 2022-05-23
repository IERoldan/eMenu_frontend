import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Admin from "./components/admin/Admin";
import UsersClick from "./components/admin/Users/UsersClick";
import { Login } from "./pages/Login/Login";
import "antd/dist/antd.css";
import { Register } from "./pages/Register/Register";
import ProductsClick from "./components/admin/Products/ProductsClick";
import { AuthProvider } from "./auth/AuthProvider";
import { PrivateRoute } from './routes/PrivateRoute';

function App() {
  const user = JSON.parse(localStorage.getItem("currentUser")) || {};
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
            <Route path="/admin" element={<PrivateRoute ><Admin /></PrivateRoute>} />
            <Route path="/adminUsers" element={<UsersClick />} />
            <Route path="/adminProducts" element={<ProductsClick />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
