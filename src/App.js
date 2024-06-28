import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Error404 from './Pages/Error404';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Logout from './Pages/Logout';
import RouteProtection from './Components/RouteProtection';
import AddProduct from './Pages/AddProduct';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<RouteProtection cmp={Dashboard}/>} />
          <Route path="/addproduct" element={<RouteProtection cmp={AddProduct}/>} />
          <Route path='/cart' element={<RouteProtection cmp={Cart}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
