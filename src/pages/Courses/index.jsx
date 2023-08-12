import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { MemoisedFooter } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

// Sample images for demonstration purposes
// import basicCourseImage from "./images/basic-course.jpg";
// import defensiveCourseImage from "./images/defensive-course.jpg";
// import advancedCourseImage from "./images/advanced-course.jpg";

const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DrivingCoursePage = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const courses = [
    {
      title: "Basic Driving Course",
      description:
        "Learn the fundamentals of driving with this comprehensive course.",
      price: 5000, // Replace this with the actual price in INR
      duration: "4 weeks",
      //   image: basicCourseImage,
    },
    {
      title: "Defensive Driving Course",
      description:
        "Enhance your driving skills and improve your road safety awareness.",
      price: 7500, // Replace this with the actual price in INR
      duration: "6 weeks",
      //   image: defensiveCourseImage,
    },
    {
      title: "Advanced Driving Course",
      description:
        "Master advanced driving techniques and become a confident driver.",
      price: 10000, // Replace this with the actual price in INR
      duration: "8 weeks",
      //   image: advancedCourseImage,
    },
  ];
  const navigate = useNavigate();
  const handleCardClick = (index, course) => {
    setClickedCard(index === clickedCard ? null : index);
    navigate("/course_detail", {
      state: {
        course,
      },
    });
  };

  return (
    <>
      <div>
        <h1>Driving Courses</h1>
        <CourseContainer>
          {courses.map((course, index) => (
            <Card
              key={index}
              //   imageDetail={{
              //     src: getDataUrlFromComp(<FaCar size={30} color="#1DA1F2"/>),
              //     position: "top",
              //   }}
              onClick={() => handleCardClick(index, course)}
              CardHeaderText={course.title}
              CardDescriptionText={course.description}
              price={course?.price}
              ctaText={"Know More"}
            />
          ))}
        </CourseContainer>
      </div>
      <MemoisedFooter />
    </>
  );
};

export default DrivingCoursePage;
