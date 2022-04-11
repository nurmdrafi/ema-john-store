// import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import About from "./components/About/About";
import NotFound from "./components/NotFound/NotFound";
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp/SignUp';
// import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
