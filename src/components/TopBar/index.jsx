import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const NavBarContainer = styled.nav`
  background-color: #ffffff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 1.3rem;
  color: #000000;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    position: absolute;
    top: 80px; /* Adjust the top position as needed */
    right: 20px; /* Adjust the left position as needed */
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 150px;
    border-radius: 5px;
    padding: 10px;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    transition: opacity 0.3s ease;
    z-index: 10;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  color: #fb4b28;
  font-size: 24px;
  padding: 0 12px;
  display: none;
  border: 1px solid  rgba(255, 137, 78, 0.955);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navMenuRef = useRef();
  const hamburgerMenuRef = useRef();
  const navigate = useNavigate();
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      navMenuRef.current &&
      !navMenuRef.current.contains(event.target) &&
      hamburgerMenuRef.current &&
      !hamburgerMenuRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <NavBarContainer>
      <Logo onClick={() => navigate("/")}>LearnDrive365.com</Logo>
      <HamburgerMenu ref={hamburgerMenuRef} onClick={handleToggleMenu}>
        {isOpen ? "✕" : "☰"}
      </HamburgerMenu>
      <NavMenu isOpen={isOpen} ref={navMenuRef}>
        {" "}
        {/* Add ref here */}
        <NavItem>
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "yellow" : "black",
            })}
            to="/home"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "yellow" : "black",
            })}
            to="/aboutus"
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "yellow" : "black",
            })}
            to="/courses"
          >
            Courses
          </NavLink>
        </NavItem>
        {/* Add other menu items as needed */}
      </NavMenu>
    </NavBarContainer>
  );
};

export default React.memo(Navbar);
