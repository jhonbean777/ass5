import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
import Login from './Components/Login'
import Register from './Components/Register'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="contactus" element={<ContactUs />}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
