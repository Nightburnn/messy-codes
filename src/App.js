import React from "react";
import './App.css';
import Navbar from "./assets/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from "./pages/shop/Shop";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import LoginSignup from "./pages/login/signup/LoginSignup";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/women" element={<Category category="women"/>}/>
<Route path="/men" element={<Category category="men"/>}/>
<Route path="/kids" element={<Category category="kids"/>}/>
<Route path="/product" element={<Product/>}>
  <Route path=":productId" element={<Product/>}/>
</Route>
<Route path="/cart" element={<Cart/>}/>
<Route path="/login" element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
   
   </div>
  );
};

export default App;
