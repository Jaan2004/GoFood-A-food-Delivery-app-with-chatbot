import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Button from 'react-bootstrap/Button';
import Card from '../components/Card';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import Chatbot from './Chatbot'

export default function Home() {
  const [search,setsearch]=useState('');
  const [rest,setrest]=useState([]);
  const [items,setitems]=useState([]);

const loadData= async ()=>{
  let  response = await fetch("http://localhost:5000/c/foodData",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },

  });

  response = await response.json();
  setitems(response[0]);
  setrest(response[1]);
  // console.log(response[0],response[1])


}
 useEffect(()=>{
  loadData()
 },[])


  return (
    <div className="dark">
 <div><Navbar/></div>
 
 <div>
 <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
  <div className="d-flex justify-content-center">
      <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search your tasty food here" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </div>
    </div>
    <div className="carousel-item active">
    <img src="/burger2.jpg" className="d-block w-100" alt="..." style={{ width: '900', height: '500px'}} />
      </div>
      <div className="carousel-item">
      <img src="/pastry.jpg" className="d-block w-100" alt="..."  style={{ width: '900', height: '500px'}}  />
      </div>
      <div className="carousel-item">
      <img src="/barbeque.jpg" className="d-block w-100" alt="..."  style={{ width: '900', height: '500px'}}  />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
 </div>
    <div className='Container dark'>
      {
        rest.length>0
        ? rest.map((data)=>{
          return(<div className='row mb-3'>
            
            <div className='col-7 fst-italic fw-bold text-end fs-3 m-3 pr-1'>{data.restaurant_name}
            <span >
              <strong className='col-10 text-end fs-5 m-3 pr-1'>Rating:</strong> {data.review.ratings}/5
            </span>
          
          </div>
          <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
            {items.length > 0 
            ? 
            items.filter((item)=>(item.CategoryName===data.category) && ( item.name.toLowerCase().includes(search.toLocaleLowerCase())))
            .map(filterItems=>{
              return(
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                   <Card item={filterItems} />
                  </div> 
              )
            })
            :<div>No such data found </div>}
            </div>
          )
        })
        : <div>======</div>
      }
     
      
    </div>
    <div><Footer/></div>
    <Chatbot />
        
    
    </div>

    
  )
}
