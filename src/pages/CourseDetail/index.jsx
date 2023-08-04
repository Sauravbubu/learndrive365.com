import React from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaRupeeSign, FaClock } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CourseDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: black;
  animation: ${fadeIn} 0.5s ease;
`;

const CourseDetailTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CourseDetailDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CourseDetailPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #f5a623;
  margin-bottom: 10px;
`;

const CourseDetailDuration = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const BuyNowButton = styled.button`
  padding: 10px 20px;
  background-color: #f5a623;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e69500;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const CourseDetailPage = () => {
  const location = useLocation();
  const course = location?.state?.course;

  const handleBuyNow = () => {
    // Implement the buy now logic here
    console.log("Buy Now clicked");
  };

  return (
    <CourseDetailContainer>
      <CourseDetailTitle>{course?.title}</CourseDetailTitle>
      <CourseDetailDescription>{course?.description}</CourseDetailDescription>
      <CourseDetailPrice>
        <IconWrapper>
          <FaRupeeSign />
        </IconWrapper>
        Price: ₹{course?.price}
      </CourseDetailPrice>
      <CourseDetailDuration>
        <IconWrapper>
          <FaClock />
        </IconWrapper>
        Duration: {course?.duration}
      </CourseDetailDuration>
      <BuyNowButton onClick={handleBuyNow}>Buy Now</BuyNowButton>
    </CourseDetailContainer>
  );
};

export default React.memo(CourseDetailPage);
