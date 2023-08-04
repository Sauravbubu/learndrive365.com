
import React, { createContext, useContext, useState, useEffect } from 'react';

const OfferPopupContext = createContext();

export const OfferPopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Set the delay here (5000 milliseconds = 5 seconds)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <OfferPopupContext.Provider value={{ showPopup, handleClosePopup }}>
      {children}
    </OfferPopupContext.Provider>
  );
};

export const useOfferPopup = () => {
  return useContext(OfferPopupContext);
};
