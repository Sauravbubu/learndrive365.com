import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const slideOutAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  /* Adjust the height as needed */
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.3s;
  ${({ currentSlide }) =>
    css`
      transform: translateX(-${currentSlide * 100}%);
    `}
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  position: relative; /* Add position relative for shadow effect */
  overflow: hidden; /* Hide the shadow overflow */
  border: 3px solid white;

  /* Apply the slideOutAnimation only to the active slide */
  ${({ sliding }) =>
    sliding &&
    css`
      animation: ${slideOutAnimation} 0.3s;
    `}

  /* Add shadow effect */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.623); /* Adjust shadow opacity as needed */
    pointer-events: none; /* Ensure the shadow does not interfere with the image */
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px); /* Initial blur effect */

  /* Remove blur effect after the image loads */
  ${({ loaded }) =>
    loaded &&
    css`
      filter: none;
    `}
`;

const SlideText = styled.div`
  position: absolute;
  top: 27%;
  left: 47%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  white-space: pre-line;
  width: 80%;
  font-weight: 900;
  animation: colorChange 5s infinite;
  @media (max-width: 768px) {
    font-size: 1rem;
    top: 55%; /* For medium-sized screens */
  }
  @keyframes colorChange {
    0% {
      color: #ff5722; /* Orange */
    }
    25% {
      color: #e91e63; /* Pink */
    }
    50% {
      color: #ffffff; /* Purple */
    }
    75% {
      color: #2196f3; /* Blue */
    }
    100% {
      color: #4caf50; /* Green */
    }
  }
`;

const FixedButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  button {
    margin: 0;
    z-index: 10;
    padding: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
    color: #e9e9e99a;
    cursor: pointer;
    transition: color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid #f5a5239f;

    &:hover {
      color: #f5a623;
    }
  }
`;

const FixedButtonsContainerOverLay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  @media (max-width: 768px) {
    top: 68%; /* For medium-sized screens */
  }
  button {
    margin: 0 10px;
    font-size: 2vw;
    border: none;
    background-color: #f5a623;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    width: 20vw;
    height: 5vw;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e69500;
    }
  }
`;

const slidesData = [
  {
    imageUrl: "https://i.imgur.com/UNZ7Uas.jpg",
    text: "Get ready for an exciting driving experience. Subscribe now!",
  },
  {
    imageUrl: "https://i.imgur.com/sfNCAZp.jpg",
    text: "Become a skilled driver and boost your confidence on the road.",
  },
  {
    imageUrl: "https://i.imgur.com/66xXWPa.jpg",
    text: "Discover the joy of driving with our expert instructors.",
  },
  {
    imageUrl: "https://i.imgur.com/d166Dhx.jpg",
    text: "Safe driving starts here. Join our driving courses today.",
  },
];

const Carousel = ({ setFormOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper currentSlide={currentSlide}>
        {slidesData.map((slide, index) => (
          <CarouselItem key={index} sliding={index === currentSlide}>
            <SlideImage
              src={slide.imageUrl}
              /* loading="lazy" */
              loaded={loaded}
              onLoad={handleImageLoad}
              referrerPolicy="no-referrer"
              alt={`Slide ${index + 1}`}
            />
            <SlideText>{slide.text}</SlideText>
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <FixedButtonsContainer>
        <button onClick={handlePrevSlide}>{"<"}</button>
        <button onClick={handleNextSlide}>{">"}</button>
      </FixedButtonsContainer>
      <FixedButtonsContainerOverLay>
        <button
          style={{ zIndex: 999, cursor: "pointer" }}
          onClick={() => {
            navigate("/courses");
          }}
        >
          Courses
        </button>
        <button
          onClick={() => {
            typeof setFormOpen === "function" && setFormOpen(true);
          }}
          style={{ zIndex: 999, cursor: "pointer" }}
        >
          Contact Us
        </button>
      </FixedButtonsContainerOverLay>
    </CarouselContainer>
  );
};

export default React.memo(Carousel);
