import React from "react";
import styled, { keyframes } from "styled-components";
import { MemoisedFooter } from "../../components/Footer";
import TraingImage from '../../assets/img5.jpg'
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutUsContainer = styled.div`
  padding: 2rem;
`;

const AboutUsHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const AboutUsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const AboutUsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInAnimation} 1s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // max-width: 1200px;
    margin: 0 auto;
  }
`;

const AboutUsImage = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const AboutUsText = styled.div`
  padding: 2rem 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 2rem;
    text-align: left;
  }
`;

const AboutUsSubtitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const AboutUsParagraph = styled.p`
  color: #555;
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <AboutUsHeader>
          <AboutUsTitle>About Us</AboutUsTitle>
        </AboutUsHeader>
        <AboutUsContent>
          <AboutUsImage>
            {/* Add an image of your driving school here */}
            <img src={TraingImage} alt="Driving School" />
          </AboutUsImage>
          <AboutUsText>
            <AboutUsSubtitle>Our Story</AboutUsSubtitle>
            <AboutUsParagraph>
              Welcome to LearnDrive365 Driving School!
            </AboutUsParagraph>
            <AboutUsParagraph>
              At LearnDrive365, we believe that safe driving is essential for a
              better tomorrow. Our driving school is dedicated to providing
              top-notch driving education that fosters responsible and confident
              drivers. With our experienced instructors and modern training
              facilities, we aim to equip our students with the knowledge and
              skills to navigate the roads safely.
            </AboutUsParagraph>
            <AboutUsParagraph>
              Our mission is to create a safer driving environment by promoting
              road safety and instilling a culture of responsible driving. We
              are committed to empowering our students with the expertise needed
              to make informed decisions while behind the wheel.
            </AboutUsParagraph>
            <AboutUsParagraph>
              Join LearnDrive365 Driving School today and embark on your journey
              to becoming a responsible and safe driver. Contact us to book your
              first driving lesson or to learn more about our courses.
            </AboutUsParagraph>
            <AboutUsParagraph>
              Let's drive together towards a safer tomorrow!
            </AboutUsParagraph>
          </AboutUsText>
        </AboutUsContent>
      </AboutUsContainer>
      <MemoisedFooter />
    </>
  );
};

export default AboutUs;
