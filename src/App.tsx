import React, { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Footer from './components/Footer.tsx';
import { Toaster } from 'react-hot-toast';
import { AppContext } from './context/AppContext.tsx';
import Login from './components/Login.tsx';
import AllProducts from './pages/AllProducts.tsx';
import ProductCategory from './pages/ProductCategory.tsx';
import ProductDetails from './pages/ProductDetails.tsx';


const App = () => {
  const isSellerPath = useLocation().pathname.startsWith("/seller");
  const {showuserLogin}=useContext(AppContext);

  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showuserLogin && <Login/>}
      <Toaster />

      <div className={`${isSellerPath ? '' : 'rounded-md px-6 md:px-16 lg:px-24 xl:px-34'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts/>} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<ProductCategory/>} />
         </Routes>
        {!isSellerPath && <Footer />}
      </div>
    </div>
  );
};

export default App;
