import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MdClose } from "react-icons/md";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
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
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s linear;
`;

const ModalContent = styled.div`
  position: relative; /* Add relative positioning */
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s linear;
  z-index: 9;
  /* Adjust width based on screen size */
  width: auto; /* For larger screens */

  @media (max-width: 768px) {
    width: 80vw; /* For medium-sized screens */
  }

  @media (max-width: 576px) {
    width: 80vw; /* For smaller screens */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: black;
  background-color: gold;
  border-radius: 50%;
  padding: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #bd7107;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <MdClose />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export const MemoisedModal = React.memo(Modal);
