import React from "react";
import styled, { css } from "styled-components";
import Card from "../Card";
import { FaCar, FaCoins, FaRegNewspaper } from "react-icons/fa";
import getDataUrlFromComp from "../../../Utils/svgToDataUrl";
const WhyUsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  // max-width: 1280px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;
const CardHeader = styled.h2`
  font-size: 0.7rem;
  margin-bottom: 16px;
  color: #b6b6b6;
  font-family: cursive;
`;

const WhyUs = () => {
  return (
    <>
      <CardHeader>Why Choose Us ?</CardHeader>
      <WhyUsContainer>
        <Card
          imageDetail={{
            src: getDataUrlFromComp(<FaCar size={30} color="#1DA1F2" />),
            position: "top",
          }}
          CardHeaderText="Easy Driving Training"
          CardDescriptionText={
            " Your path to confident and skilled driving, with expert instructors and a focus on safety. Get ready to hit the road with ease and attain your driving goals!"
          }
          index={0}
        />
        <Card
          imageDetail={{
            src: getDataUrlFromComp(
              <FaRegNewspaper size={30} color="#1DA1F2" />
            ),
            position: "top",
          }}
          CardHeaderText="Get Licensed"
          CardDescriptionText={
            "Your gateway to obtaining your driver's license hassle-free, with comprehensive training and expert guidance. Drive confidently and embark on new adventures with our professional driving school."
          }
          index={1}
        />
        <Card
          imageDetail={{
            src: getDataUrlFromComp(<FaCoins size={30} color="#1DA1F2" />),
            position: "top",
          }}
          index={2}
          CardHeaderText="Affordable Price"
          CardDescriptionText={
            " Quality driving education at budget-friendly rates, ensuring accessibility for all learners. Achieve your driving goals without breaking the bank!"
          }
        />
      </WhyUsContainer>
    </>
  );
};

export default WhyUs;
