// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
// import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"; //to include JavaScript
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup.jsx';
import Myorder from './screens/Myorder.jsx';
import { Cartprovider } from './components/Contextreducer.js';
import Payment from './screens/Payment'
import { TotalAmountProvider } from './TotalAmountContext';
import { PaymentStatusProvider } from './PaymentStatusContext';

// import { useContext } from 'react';

function App() {
  return (
    <Cartprovider>
      <TotalAmountProvider>
        <PaymentStatusProvider>
    <Router>
    <div>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/createuser' element={<Signup/>}/>
    <Route exact path='/myorder' element={<Myorder/>}/>
    <Route exact path='/payment' element={<Payment/>}/>
   
    </Routes>
    </div>
    </Router>
    </PaymentStatusProvider>
    </TotalAmountProvider>
    </Cartprovider>
  );
}

export default App;
