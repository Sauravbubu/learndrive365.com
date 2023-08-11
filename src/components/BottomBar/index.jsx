import React, { useState } from "react";
import styled from "styled-components";
import { phoneNumber } from "../../Constants/constant";
import { FaPhoneAlt, FaWhatsapp, FaMapMarked } from "react-icons/fa";
import ExpandableList from "../AdressListPopup";

const BottomAppBarContainer = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0vh;
   background-color: #05a97f;
   color: #ffffff;
  justify-content: space-around;
  align-items: center;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuItem = styled.span`
  font-size: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  overflow-y: scroll;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  opacity: ${({ showPopup }) => (showPopup ? "1" : "0")};
  visibility: ${({ showPopup }) => (showPopup ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
  height: 40vh;
  h2 {
    color: darkblue;
    font-size: 1rem;
  }
`;

const BottomAppBarMenu = () => {
  const [showPopup, setShowPopup] = useState(false);

  const placesWithAddresses = [
    { name: "Office 1", address: "Address 1, City 1" },
    { name: "Office 2", address: "Address 2, City 2" },
    { name: "Office 2", address: "Address 2, City 2" },
    { name: "Office 2", address: "Address 2, City 2" },
    { name: "Office 2", address: "Address 2, City 2" },

    // Add more places with addresses as needed
  ];

  const handleMenuItemClick = (label) => {
    switch (label) {
      case "Call Now":
        window.location.href = `tel:${phoneNumber}`;
        break;
      case "Chat On Whatsapp":
        window.location.href = `https://wa.me/${phoneNumber}`;
        break;
      case "Directions":
        setShowPopup(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <BottomAppBarContainer>
        <MenuItem onClick={() => handleMenuItemClick("Call Now")}>
          <FaPhoneAlt size={20} color="ffffff" />
          <h4 style={{ marginLeft: "5px" }}>Call Now</h4>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Chat On Whatsapp")}>
          <FaWhatsapp size={20} color="ffffff" />
          <h4 style={{ marginLeft: "5px" }}>Chat On Whatsapp</h4>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Directions")}>
          <FaMapMarked size={20} color="ffffff" />
          <h4 style={{ marginLeft: "5px" }}>Directions</h4>
        </MenuItem>
      </BottomAppBarContainer>
      <PopupContainer showPopup={showPopup}>
        <h2>Choose Your Nearest Office :</h2>
        <ExpandableList items={placesWithAddresses} />
        <button onClick={() => setShowPopup(false)}>Close</button>
      </PopupContainer>
    </>
  );
};

export default BottomAppBarMenu;
