import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import Badge from "react-bootstrap/Badge"
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './Contextreducer';
export default function Navbar() {
  let data = useCart();
  const [cartview,setcartview]= useState(false)
  const nav= useNavigate();
  const handlelogout= ()=>{
    localStorage.removeItem("authtoken");
    nav("/login");
  }
  
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1 fst-italic font-weight-bold" to="/">GoFood</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
       {(localStorage.getItem("authtoken")) ?
       <li class="nav-item">
       <Link class="nav-link active fs-5" aria-current="page" to="/myorder">MyOrders</Link>
     </li>
        :""
      }


        </ul>
        {(!localStorage.getItem("authtoken")) ?
        <div className='d-flex'>
          <Link class="btn bg-white text-success mx-1" to="/login">Login</Link>
        
       
          <Link class="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
          </div>
          :
          <>
          <div className='btn bg-white text-success mx-2'  onClick={()=>{setcartview(true)}}>
            My Cart {" "}
            <Badge pill bg="danger"> {data.length}</Badge>
            </div>
            {cartview ? <Modal onClose={()=>setcartview(false)}><Cart/></Modal>:null}
          <div className='btn bg-white text-danger mx-2' onClick={handlelogout}>
            LogOut
            </div>
            
            </>
          }
          
        </div>
  </div>
</nav>

  );
}
