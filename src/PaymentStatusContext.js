// PaymentStatusContext.js
import { createContext, useState } from 'react';

const PaymentStatusContext = createContext();

const PaymentStatusProvider = ({ children }) => {
  const [paymentStatus, setPaymentStatus] = useState({});

  const updatePaymentStatus = (orderId, status) => {
    setPaymentStatus((prevStatus) => ({ ...prevStatus, [orderId]: status }));
  };

  return (
    <PaymentStatusContext.Provider value={{ paymentStatus, updatePaymentStatus }}>
      {children}
    </PaymentStatusContext.Provider>
  );
};

export { PaymentStatusProvider, PaymentStatusContext };