import React from "react";
import styled, { keyframes } from "styled-components";
import { FaRoad, FaWheelchair, FaFemale } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SectionContainer = styled.div`
  padding: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

const WhyList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
`;

const WhyItem = styled.li`
  flex: 0 0 200px;
  padding: 20px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out;

  svg {
    font-size: 48px;
    margin-bottom: 20px;
    color: #05a97f;
  }
`;

const WhyText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;

const WhyOurDrivingSchool = () => {
  return (
    <SectionContainer>
      <SectionTitle >
        Why Our Driving School is Safe and Friendly for Women
      </SectionTitle>
      <WhyList>
        <WhyItem>
          <FaRoad />
          <WhyText>Well-maintained vehicles and safety precautions.</WhyText>
        </WhyItem>
        <WhyItem>
          <FaWheelchair />
          <WhyText>Background-checked and experienced instructors.</WhyText>
        </WhyItem>
        <WhyItem>
          <FaFemale />
          <WhyText>Female instructors available upon request.</WhyText>
        </WhyItem>
      </WhyList>
    </SectionContainer>
  );
};

export const MemoisedWhyOurDrivingSchool = React.memo(WhyOurDrivingSchool);
