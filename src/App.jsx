 
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import ProductDetails from './components/ProductDetails';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const hideNavbarAndBanner = location.pathname.startsWith('/product/');

  return (
    <CartProvider>
      {!hideNavbarAndBanner && <Navbar /> }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/checkout" element={<Checkout />} /> 
       
      </Routes>
       {!hideNavbarAndBanner && <Footer /> }
    </CartProvider>
  );
}

export default App;
