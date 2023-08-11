import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FaUserTie, FaUserAlt, FaHome } from "react-icons/fa";

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

const TestimonialContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px; /* Adjust the maximum width as needed */
  margin: 0 auto;
`;

const TestimonialWrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  margin-right: 5vw;
  transition: transform 0.3s;
  ${({ currentSlide }) =>
    css`
      transform: translateX(-${currentSlide * 114}%);
    `}
`;

const TestimonialItem = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex: 0 0 80%;
  margin: 0 10%;
  padding: 20px;
  text-align: center;
  opacity: ${({ active }) => (active ? "1" : "0.7")};
  transition: opacity 0.3s ease;
  background-color: #05a97f;
  color: #fff;

  ${({ sliding }) =>
    sliding &&
    css`
      animation: ${slideOutAnimation} 0.3s;
    `}
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 24px;
`;

const TestimonialName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TestimonialProfession = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
`;

const TestimonialReview = styled.p`
  font-size: 14px;
  font-style: italic;
`;

const SlideDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#333" : "#ddd")};
  margin: 5px;
  cursor: pointer;
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const testimonialsData = [
  {
    id: 1,
    name: "ମନୋଜ ମିଶ୍ର",
    profession: "ବ୍ୟବସାୟି",
    review:
      "ମୁଁ ଏହି ଡ୍ରାଇଭିଂ କୋର୍ସ ସହିତ ଏକ ଭଲ ଅନୁଭବ ପାଇଁ ଧନ୍ୟବାଦ କରୁଛି। ଇନସଟ୍ରକଟରଗଣ ଖୁବ ସହିତରେ ଏବଂ ଜ୍ଞାନୀ ଅଟନ୍ତମିକ ଆଛନ୍ତି।",
    category: "business",
  },
  {
    id: 2,
    name: "ସାନ୍ତ୍ବନା ମହାନ୍ତି",
    profession: "ସାମ୍ପ୍ରଦାୟିକ",
    review:
      "ମୁଁ ପହିଲାରେ ମୋଟର୍ ଚାଳାନ୍ତି କଲାଶିକ୍ଷା ପାଇଁ ଏହି ଡ୍ରାଇଭିଂ କୋର୍ସକୁ ନିବେଦନ କରୁଛି। ଏହି କୋର୍ସରେ ଏକଟା ମାନଙ୍କ କୁମ୍ଭୀ ନାହିଁ ଦେଲୁଂ ଅନୁଭବ ହେଉଛି।",
    category: "community",
  },
  {
    id: 3,
    name: "ମିତାଳୀ ମହାପାତ୍ର",
    profession: "ଗୃହନର୍ମ୍ମିକ",
    review:
      "ମୁଁ ଏହି ଡ୍ରାଇଭିଂ କୋର୍ସ ସହିତ ମନୋଜ ପରିବାର ସବୁଠୁ ଭଲ ଅନୁଭବ ପାଇଁ ଧନ୍ୟବାଦ କରୁଛି। ଏହି କୋର୍ସରେ ଏକଟା ମାନଙ୍କ କୁମ୍ଭୀ ନାହିଁ ଦେଲୁଂ ଅନୁଭବ ହେଉଛି।",
    category: "housewife",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialsData.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => {
      clearInterval(autoScroll);
    };
  }, []);

  return (
    <TestimonialContainer>
      <TestimonialWrapper currentSlide={currentSlide}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem
            key={testimonial.id}
            active={index === currentSlide}
            sliding={index === currentSlide}
          >
            {testimonial.category === "business" && (
              <IconWrapper>
                <FaUserTie />
              </IconWrapper>
            )}
            {testimonial.category === "community" && (
              <IconWrapper>
                <FaUserAlt />
              </IconWrapper>
            )}
            {testimonial.category === "housewife" && (
              <IconWrapper>
                <FaHome />
              </IconWrapper>
            )}
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialProfession>{testimonial.profession}</TestimonialProfession>
            <TestimonialReview>{testimonial.review}</TestimonialReview>
          </TestimonialItem>
        ))}
      </TestimonialWrapper>
      <DotWrapper>
        {testimonialsData.map((_, index) => (
          <SlideDot
            key={index}
            active={index === currentSlide}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </DotWrapper>
    </TestimonialContainer>
  );
};

export default Testimonial;
