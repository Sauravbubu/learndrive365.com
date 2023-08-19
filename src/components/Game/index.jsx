import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 9vh;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    margin-top: 5vh;
    padding: 15px;
    border-radius: 0;
  }
`;

const Question = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const OptionButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: ${(props) => (props.isCorrect ? "#008000" : "#4CAF50")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in ${(props) => props.animationDelay}s forwards;

  &:hover {
    background-color: ${(props) => (props.isCorrect ? "#006400" : "#45a049")};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Feedback = styled.div`
  margin-top: 10px;
  font-weight: bold;
  color: ${(props) => (props.isCorrect ? "#008000" : "#FF0000")};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const NextButton = styled.button`
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);

  const quizData = [
    {
      question: "What color are stop signs?",
      options: ["Red", "Yellow", "Green", "Blue"],
      correctAnswer: "Red",
    },
    {
      question: "What does a yellow traffic light mean?",
      options: ["Stop", "Go", "Slow down", "Turn left"],
      correctAnswer: "Slow down",
    },
    {
      question: "What should you do at a four-way stop sign?",
      options: [
        "Go straight",
        "Honk your horn",
        "Wait for others to go",
        "Drive faster",
      ],
      correctAnswer: "Wait for others to go",
    },
    {
      question: "What is the maximum speed limit in a school zone?",
      options: ["40 mph", "25 mph", "55 mph", "65 mph"],
      correctAnswer: "25 mph",
    },
    {
      question: "What do broken white lines on the road indicate?",
      options: [
        "No stopping or parking",
        "Pedestrian crossing ahead",
        "Two-way traffic",
        "Railroad crossing ahead",
      ],
      correctAnswer: "Two-way traffic",
    },
    {
      question:
        "What does a solid yellow line on your side of the road indicate?",
      options: [
        "No passing",
        "Pedestrian crossing zone",
        "One-way road",
        "Emergency vehicles only",
      ],
      correctAnswer: "No passing",
    },
    {
      question:
        "What should you do if you're driving and it starts to rain heavily?",
      options: [
        "Turn on your high beams",
        "Drive faster to get out of the rain",
        "Slow down and increase your following distance",
        "Use your horn frequently",
      ],
      correctAnswer: "Slow down and increase your following distance",
    },
    {
      question: "What is the penalty for drunk driving in most places?",
      options: [
        "Fine and warning",
        "License suspension for a week",
        "Community service",
        "Fine, license suspension, and possible imprisonment",
      ],
      correctAnswer: "Fine, license suspension, and possible imprisonment",
    },
    {
      question: "When should you use your hazard lights while driving?",
      options: [
        "When you're in a hurry",
        "To signal other drivers that you're changing lanes",
        "When you're driving in heavy traffic",
        "Only in emergencies or when your vehicle is a temporary obstruction",
      ],
      correctAnswer:
        "Only in emergencies or when your vehicle is a temporary obstruction",
    },
    {
      question: "What is the purpose of an anti-lock braking system (ABS)?",
      options: [
        "To make your brakes more powerful",
        "To prevent your tires from locking up during hard braking",
        "To increase fuel efficiency",
        "To improve steering control",
      ],
      correctAnswer:
        "To prevent your tires from locking up during hard braking",
    },
    {
      question: "What should you do if your vehicle's accelerator gets stuck?",
      options: [
        "Pump the accelerator pedal to free it",
        "Shift to neutral, brake, and safely pull over",
        "Turn off the engine and call for help",
        "Use the emergency brake to stop the vehicle",
      ],
      correctAnswer: "Shift to neutral, brake, and safely pull over",
    },
    {
      question: "What is the purpose of a blind-spot mirror or convex mirror?",
      options: [
        "To make objects appear smaller than they are",
        "To eliminate all blind spots around your vehicle",
        "To increase the field of view and reduce blind spots",
        "To see distant objects more clearly",
      ],
      correctAnswer: "To increase the field of view and reduce blind spots",
    },
    // Add more questions...
  ];

  const handleOptionClick = (selectedOption) => {
    if (!answered) {
      const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
      if (selectedOption === correctAnswer) {
        setFeedback("Correct!");
      } else {
        setFeedback("Incorrect. Try again.");
        // Show the correct answer after an incorrect selection
        setTimeout(() => {
          setFeedback(`Correct answer: ${correctAnswer}`);
        }, 1000);
      }
      setAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback("");
      setAnswered(false);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const showNextButton = answered || feedback === "Correct!";

  return (
    <QuizContainer>
      <h1 style={{ color: "orange" }}>Let's check How SMART you are?</h1>
      <Question>{currentQuestion.question}</Question>
      {currentQuestion.options.map((option, index) => (
        <OptionButton
          key={index}
          onClick={() => handleOptionClick(option)}
          isCorrect={
            feedback === "Correct!" && option === currentQuestion.correctAnswer
          }
          animationDelay={index * 0.2}
        >
          {option}
        </OptionButton>
      ))}
      {feedback && (
        <Feedback isCorrect={feedback === "Correct!"}>{feedback}</Feedback>
      )}
      {showNextButton && currentQuestionIndex < quizData.length - 1 && (
        <NextButton onClick={handleNextQuestion}>Next Question</NextButton>
      )}
    </QuizContainer>
  );
};

export default QuizGame;
