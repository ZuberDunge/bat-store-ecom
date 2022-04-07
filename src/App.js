import "./App.css";
import Main from "./frontend/pages/main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from "./frontend/pages/singelProduct";
import Cart from "./frontend/pages/cart";
import Navbar from "./frontend/pages/nav";
import Footer from "./frontend/pages/footer";
import WishlistPage from "./frontend/pages/wishList";
import Login from "./frontend/pages/login";
import Profile from "./frontend/pages/profile";
import CategorPage from "./frontend/pages/categoryPage";
import { useContext } from "react";
import { FilterContext } from "./frontend/context/filterContext";
import Checkout from "./frontend/pages/checkout";

function App() {

  return (

    <Router Router > <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/comics/:id' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/cart/checkout' element={<Checkout />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/category/:id' element={<CategorPage />} />
        <Route path='/category/:publicationId/:id' element={<CategorPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route exact path='/not-found' element={<Main />} />
      </Routes>
      <Footer />
    </div>
    </Router >
  );
}

export default App;
