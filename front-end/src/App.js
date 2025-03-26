import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Home/Layout"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import ShopDetail from "./pages/Detail/ShopDetail";
import Contact from "./pages/Contact/Contact";
import Chekout from "./pages/Checkout/Chekout";
import Login from "./pages/Authentification/Login";
import Registre from "./pages/Authentification/Registre";
import Forget from "./pages/Authentification/Forget";
import Reset from "./pages/Authentification/Reset";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/"element={<Layout />} />
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Shop'element={<Shop />}/>
          <Route path='/Detail/:id'element={<ShopDetail/>}/>
          <Route path='/Contact'element={<Contact/>}/>   
          <Route path='/Checkout'element={<Chekout/>}/> 


      
          
        </Route>
        <Route path='/Login' element={<Login/>} />
      <Route path='/Registre' element={<Registre/>} />
      <Route path='/Forget' element={<Forget/>}/>
      <Route path='/Reset/:token' element={<Reset/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;