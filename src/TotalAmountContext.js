import { createContext, useState } from 'react';

const TotalAmountContext = createContext();

const TotalAmountProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <TotalAmountContext.Provider value={{ totalAmount, setTotalAmount }}>
      {children}
    </TotalAmountContext.Provider>
  );
};

export { TotalAmountProvider, TotalAmountContext };