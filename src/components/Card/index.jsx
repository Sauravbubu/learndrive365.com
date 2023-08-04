import React from "react";
import styled, { keyframes } from "styled-components";

const blobBounce = keyframes`
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    background-color: #FF8C00; /* Orange */
  }
  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    background-color: #FFFF00; /* Yellow */
  }
  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    background-color: #00BFFF; /* Blue */
  }
  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
    background-color: #FF0000; /* Red */
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 28%;
  height: 250px;
  border-radius: 14px;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  justify-content: center;
  margin: 0.5rem;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  &:hover {
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
     */
    transform: scale(1.05);
  }
  button {
    z-index: 3;
    background-color: #e1b637;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  &.is-clicked {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 5px;
  left: 7px;
  width: 96%;
  height: 240px;
  z-index: 2;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
  @media (max-width: 768px) {
    width: 96%;
    margin-bottom: 20px;
  }
`;

const Blob = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff0000; /* Initial Red */
  opacity: 1;
  filter: blur(12px);
  animation: ${blobBounce} 5s infinite ease;
`;

const CardDescription = styled.p`
  font-size: 0.8rem;
  color: #4c5e5e;
  z-index: 2;
  margin: 0 2rem;
`;

const CardHeader = styled.h2`
  font-size: 1rem;
  text-shadow: 2px;
  margin-bottom: 16px;
  color: #000000;
  z-index: 2;
`;
const CardImage = styled.img`
  z-index: 3;
`;
const Card = ({
  CardHeaderText,
  CardDescriptionText,
  imageDetail,
  index,
  onClick,
  price,
  ctaText,
}) => {
  return (
    <CardContainer
      onClick={() => (typeof onClick === "function" ? onClick(index) : null)}
    >
      <Background />
      <Blob />
      {imageDetail?.position == "top" && (
        <CardImage src={imageDetail?.src} shape={imageDetail?.shape} />
      )}
      <CardHeader>{CardHeaderText}</CardHeader>
      <CardDescription>{CardDescriptionText}</CardDescription>
      {price && <CardHeader>₹{price}</CardHeader>}
      {ctaText && <button onClick={onClick}>{ctaText}</button>}
    </CardContainer>
  );
};

export default React.memo(Card);
