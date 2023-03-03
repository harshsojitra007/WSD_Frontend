import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertProductPage from "./Admin/InsertProduct";

import './App.css';
import NavbarHeader from "./Components/NavbarHeader";
import ProductPage from "./Pages/DisplayProduct";
import HomePage from "./Pages/Home";
import Login from './Pages/Login';
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <NavbarHeader />
      <Routes>
        <Route path="/add" element={<InsertProductPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/display/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
