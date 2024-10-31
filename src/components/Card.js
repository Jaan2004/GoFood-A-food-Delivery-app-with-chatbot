import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './Contextreducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Card({ item }) {
  let dispatch = useDispatchCart();
  let data= useCart()
  const priceref= useRef();
let options = item.options[0];
let priceoption= Object.keys(options);
const [qty,setqty]= useState(1)
const [size,setsize]= useState("")
// const [price, setPrice] = useState(options[priceoption[0]]);
const handleAddtocart= async ()=>{
  let food= null;
  for(const items of data){
    if(items.id=== item._id){
    food=item;

    break;
    }
  }
  if(food !== null){
    if(food.size === size){
      await dispatch({type:"UPDATE",id:item._id,price:finalprice,qty:qty,})
      return
    }
  
  else if(food.size !== size){
    await dispatch({type:"ADD",id:item._id,name:item.name,price:finalprice,qty:qty,size:size})
    return
  }
  return
}
  await dispatch({type:"ADD",id:item._id,name:item.name,price:finalprice,qty:qty,size:size})
  console.log(data)
}
let finalprice= qty* parseInt(options[size]);
useEffect(()=>{
  setsize(priceref.current.value)
},[])


const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className="card mt-3" style={{"width": "20rem","Height":"360px"}}>
  <img className="card-img-top" src={item.img} alt="Card  cap" style={{height:"150px",objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <div
        className="card-footer"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        {isOpen ?  <p className="card-text">{item.description}</p> : "View Description"}
      </div>
    <div className='container w-100'>
      <select className='m-2 h-100  bg-success rounded'  onChange={(e)=>setqty(e.target.value)}>
        {Array.from(Array(6),(e,i)=>{
          return <option key={i+1} value={i+1}>{i+1}</option>
        })}
      </select>
      <select className='m-2 h-100 bg-success rounded' ref={priceref}  onChange={(e)=>setsize(e.target.value)}>
      {priceoption.map((data)=>{
        return  <option key={data} value={data}>{data}</option>

      })}
</select>
<div className='d-inline h-100 fs-5' style={{ marginRight: 0, marginLeft: 0 }}>Price {finalprice}/-    </div>
<div className='d-inline m-9 h-100 fs-5' style={{ marginLeft: 0 }}>
  Rating: 
  {Array.from({ length: 5 }, (_, i) => (
    <FontAwesomeIcon
      key={i}
      icon={faStar}
      style={{
        fontSize: 15,
        color: i < (item.review && item.review.ratings) ? 'gold' : 'gray',
      }}
    />
  ))}
  {(item.review.ratings)}/5
</div>
<hr></hr>
<button className="btn btn-outline-success text-white bg-success " type="submit" onClick={handleAddtocart}>Add to Cart</button>
    </div>
  </div>
</div>
    </div>
    
  )
}
