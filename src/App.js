import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Header/Header';
import About from './Pages/About/About';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={
          <div>
           <h3>this page in not available</h3>
           <h1 className='fs-1'>404</h1>
          </div>
        }></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
