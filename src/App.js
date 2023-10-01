import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/common/Navbar';
import Footer from './pages/common/Footer';
import Login from './pages/user/auth/Login';
import Register from './pages/user/auth/Register';
import Main from './pages/main/Main';
import Details from './pages/products/Details';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkhout/Checkout';
import Success from './pages/success/Success';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes >
          <Route exact path="/" element={<Main></Main>}></Route>
          <Route exact path="/home" element={<Main></Main>}></Route>
          <Route  path="/product/details" element={<Details></Details>}></Route>
          <Route path="/user/login" element={<Login></Login>} />
          <Route path="/user/register" element={<Register></Register>} />
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/order/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/product/order/success" element={<Success></Success>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
