import React, { useState } from 'react';
import './PaymentPortal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TotalAmountContext } from '../TotalAmountContext';
import { PaymentStatusContext } from '../PaymentStatusContext';

const PaymentPortal = ({ orderId ,TotalAmount }) => {
  
  const navigate = useNavigate();
  const { totalAmount } = useContext(TotalAmountContext);
  const { updatePaymentStatus } = useContext(PaymentStatusContext); // Get the setPaymentStatus function from the context

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState(0);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call payment gateway API here
    console.log('Payment submitted:', {
      cardNumber,
      expirationDate,
      cvv,
      amount,
    });
    updatePaymentStatus(orderId, true); // Update the payment status using the context
    navigate('/myorder');
    
  };

  const handleCancel = (e) => {
    e.preventDefault();
    // Call payment gateway API to cancel payment
    console.log('Payment cancelled:', {
      cardNumber,
      expirationDate,
      cvv,
      amount,
    });
    updatePaymentStatus(orderId, false);// Update the payment status using the context
    navigate('/');
  };

  return (
    <div className="container payment-portal">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="title text-center">Secure Payment Portal</h2>
          <div className="card payment-card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Card Number:</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234-5678-9012-3456"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Expiration Date:</label>
                  <input
                    type="text"
                    value={expirationDate}
                    onChange={handleExpirationDateChange}
                    placeholder="MM/YY"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>CVV:</label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={handleCvvChange}
                    placeholder="123"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Amount:</label>
                  <input
                    type="number"
                    value={totalAmount }
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    className="form-control"
                  />
                </div>
                <div className="form-group d-flex justify-content-between">
                {/* <Link to="/"><button className='btn bg-success mt-5 ' onClick={handleSubmit} > Check Out </button></Link>  */}
             
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleSubmit}
                  >
                    Make Payment
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancel}
                  >
                    Cancel Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;