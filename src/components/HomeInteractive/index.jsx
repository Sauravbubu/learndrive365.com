import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { FaCar, FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InteractiveSection = styled.section`
  background-color: #ffffff;
  padding: 40px 0;
`;

const InteractiveContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #e0e0e0;
  padding: 20px;
`;

const InteractiveTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  font-weight: bold;
`;

const InteractiveText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
`;

const InteractiveQuestion = styled.h3`
  font-size: 24px;
  color: #333;
  font-weight: bold;
`;

const InteractiveButton = styled.button`
  background-color: #05a97f;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;

const GifContainer = styled.div`
  margin-top: 20px;
  img {
    width: 100%;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Emphasis = styled.span`
  font-weight: bold;
`;

const IconWrapper = styled.span`
  font-size: 24px;
  margin-right: 5px;
  vertical-align: middle;
`;

const InteractiveSectionComponent = () => {
  const [showGuide, setShowGuide] = useState(false);
  const navigate = useNavigate();
  const transitions = useTransition(showGuide, {
    from: { opacity: 0, transform: "translateY(20px)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
  });

  const handleButtonClick = () => {
    setShowGuide(true);
  };

  return (
    <InteractiveSection>
      <InteractiveContainer>
        <InteractiveTitle>Welcome to LearnDrive365! 🚗</InteractiveTitle>
        <InteractiveText>
          Embark on a journey to become a safe and skilled driver with our
          professional instructors. Master the art of driving while gaining
          confidence and essential skills for a lifetime of responsible road
          use.
        </InteractiveText>
        {transitions(
          (style, item) =>
            item && (
              <animated.div key="guide" style={{ ...style }}>
                <InteractiveText>
                  Discover our comprehensive guide to navigating Indian roads.
                  From fundamental rules to advanced techniques, we've curated
                  insights to empower you on your driving journey.
                </InteractiveText>
                <GifContainer>
                  <img
                    src="https://usagif.com/wp-content/uploads/gifs/car-driving-61.gif"
                    alt="Driving Tips GIF"
                  />
                </GifContainer>
                <InteractiveText>
                  Here are some <Emphasis>essential driving tips</Emphasis> to
                  keep in mind:
                  <List>
                    <ListItem>
                      <IconWrapper>
                        <FaArrowRight />
                      </IconWrapper>
                      Adhere to traffic rules and signals at all times.
                    </ListItem>
                    <ListItem>
                      <IconWrapper>
                        <FaCar />
                      </IconWrapper>
                      Maintain a safe following distance from the vehicle ahead.
                    </ListItem>
                    <ListItem>
                      <IconWrapper>
                        <FaInfoCircle />
                      </IconWrapper>
                      Always use your seatbelt and ensure all passengers do too.
                    </ListItem>
                  </List>
                </InteractiveText>
                <InteractiveButton onClick={() => navigate("/courses")}>
                  Let's Learn
                </InteractiveButton>
              </animated.div>
            )
        )}
        {!showGuide && (
          <div>
            <InteractiveQuestion>
              Ready to Begin Your Driving Lessons? 🚦
            </InteractiveQuestion>
            <InteractiveButton onClick={handleButtonClick}>
              Yes, Show Me How! 🚀
            </InteractiveButton>
          </div>
        )}
      </InteractiveContainer>
    </InteractiveSection>
  );
};

export default InteractiveSectionComponent;
