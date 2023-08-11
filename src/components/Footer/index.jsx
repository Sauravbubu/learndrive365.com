import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 0;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 5vh;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 0;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #05a97f;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} LearnDrive365 | All rights reserved |{" "}
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink> |{" "}
        <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export const MemoisedFooter = React.memo(Footer);
