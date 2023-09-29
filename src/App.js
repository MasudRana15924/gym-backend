import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/common/Navbar';
import Footer from './pages/common/Footer';
import Login from './pages/user/auth/Login';
import Register from './pages/user/auth/Register';
import Main from './pages/main/Main';
import Details from './pages/products/Details';
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
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
