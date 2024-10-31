import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useContext } from 'react';
import { PaymentStatusContext } from '../PaymentStatusContext';
 // Import the PaymentPortal component

export default function MyOrder() {

    const { paymentStatus } = useContext(PaymentStatusContext); // Get the payment status from the context

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('useremail'))
        await fetch("http://localhost:5000/c/myorderdata", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('useremail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>

                    {orderData !== null ? Array(orderData).map(data => {
                        return (
                            
                            data.orderData ?
                                data.orderData.orderdata.slice(0).reverse().map((item) => {
                                    return (
                                        
                                        item.map((arrayData) => {
                                            return (
                                                <>

                                                <div>

                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img  className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                                {/* <img className="card-img-top" src={arrayData.img} alt="Card  cap" style={{height:"150px",objectFit:"fill"}}/> */}
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    {paymentStatus[arrayData.orderId] !== null && (
                                                                        <div className={`payment-status mt-2 ${paymentStatus[arrayData.orderId] ? 'text-success fw-bold fs-6' : 'text-danger fw-bold'}`}>
                                                                            Payment Status: {paymentStatus[arrayData.orderId] ? 'Success' : 'Failed'}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                                </>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : "You haven't Placed any Order yet!"}
                </div>


            </div>

            <Footer />
        </div>
    )
}