import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  color: #fd0707;
  padding: 0 5px;
  border-radius: 50%;
  /* background-color:#f73d3d ; */
  /* border: 1px solid  rgba(0, 0, 0, 0.2); */
  right: 5px;
  cursor: pointer;
`;

const OfferHeader = styled.h2`
  margin-bottom: 10px;
  color: red;
  font-size: 1.5rem;
`;

const OfferDescription = styled.p`
  color: #666;
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OfferPopup = ({ header, description, timeIntervalInMinuit, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, timeIntervalInMinuit * 60 * 1000); // Convert minutes to milliseconds

    const handleClickOutside = (event) => {
      if (!event.target.closest(".popup-container")) {
        setShowPopup(false);
        typeof onClose === "function" && onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [timeIntervalInMinuit, onClose]);

  const handleClose = () => {
    setShowPopup(false);
    typeof onClose === "function" && onClose();
  };

  if (!showPopup) return null;

  return (
    <ModalOverlay>
      <PopupContainer className="popup-container">
        <CloseButton onClick={handleClose}>X</CloseButton>
        <OfferHeader>{header}</OfferHeader>
        <OfferDescription>{description}</OfferDescription>
      </PopupContainer>
    </ModalOverlay>
  );
};

export default OfferPopup;
