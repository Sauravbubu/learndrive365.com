import React from 'react';
import styled, { keyframes } from 'styled-components';

const runAnimation = keyframes`
  100% {
    transform: translateX(-1200px);
  }
`;  

const rotateAnimation = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

// Styled components
const Container = styled.div`
  background: #00f;
  position: relative;
  top: 3vh;
`;

const Car = styled.div`
  position: absolute;
  z-index: 1;
  right: -50px;
  animation: ${runAnimation} 10s infinite linear;
`;

const CarBody = styled.div`
  img {
    width: 300px; /* Increase the car width */
    height: 210px; /* Increase the car height */
  }
`;

const Tire = styled.div`
  position: absolute;
`;

const TireImage = styled.img`
  width: 4em; /* Increase the tire image size */
  animation: ${rotateAnimation} 3s infinite linear;
  position: relative;
`;

const Tire1 = styled(Tire)`
  left: 3.5em;
  top: 106px;
`;

const Tire2 = styled(Tire)`
  left: 12em;
  top: 106px;
`;

const Road = styled.div`
  img {
    width: 100%;
  }
`;
const CarAnimation = () => {
  return (
    <Container>
      <Car>
        <CarBody>
          <img src="https://hasinhayder.github.io/CSS3-Keyframe-Transition/img/car3.png" alt="" />
        </CarBody>
        <Tire1>
          <TireImage src="https://hasinhayder.github.io/CSS3-Keyframe-Transition/img/tyre.png" alt="" />
        </Tire1>
        <Tire2>
          <TireImage src="https://hasinhayder.github.io/CSS3-Keyframe-Transition/img/tyre.png" alt="" />
        </Tire2>
      </Car>
      {/* <Road>
        <img src="https://hasinhayder.github.io/CSS3-Keyframe-Transition/img/road.jpg" alt="" />
      </Road> */}
    </Container>
  );
};

export default CarAnimation;
