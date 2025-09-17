/* Author: Callum Taylor */
/* Filename: Navbar.tsx */

import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 50;
  background-color: #0F1C2D;
`;

const LogoContainer = styled(motion.div)`
  width: 36px;
  padding: 32px;
`;

const NavContainer = styled.div`
  padding: 16px;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0 16px 0 16px;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  color: #ffffff;
  transition: 300ms;

  &:hover {
    color: #66fcf1;
    transition: color 300ms;
  }

`;

const NavButton = styled.button`
  padding: 12px 18px;
  border: 1px solid #66fcf1;
  color: #66fcf1;
  background: transparent;
  font-weight: 500;
  font-size: 100%;
  border-radius: 4px;
  transition: 300ms;

  &:hover {
    background-color: #66fcf13d;
    cursor: pointer;
    transition: background-color 300ms;
  }
`;

const MenuIconButton = styled.div`
  width: 36px;
  padding: 32px;
  @media only screen and (min-width: 901px) {
    display: none;
  }
  cursor: pointer;
`;

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [navbar, setNavbar] = React.useState(false);

  function changeBackground() {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  React.useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Container className={navbar ? "active" : ""}>
      <LogoContainer
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StaticImage alt="" src="../images/logo.svg" />
      </LogoContainer>
      <NavContainer>
        <Nav>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <NavItem>
              <Link href="#home">Home</Link>
            </NavItem>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            <NavItem>
              <Link href="#about">About</Link>
            </NavItem>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.2 }}
          >
            <NavItem>
              <Link href="#work">Work</Link>
            </NavItem>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.3 }}
          >
            <NavItem>
              <Link href="#contact">Contact</Link>
            </NavItem>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.4 }}
          >
            <NavItem>
              <Link href="https://drive.google.com/file/d/1pya_Gr0AGzH0A5eVita1XVvS8jH1zO4F/view?usp=sharing">
                <NavButton>Resume</NavButton>
              </Link>
            </NavItem>
          </motion.div>
        </Nav>
      </NavContainer>
      <MenuIconButton
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
      >
       {sidebarOpen ?  <StaticImage alt="" src="../images/close.svg" /> :  <StaticImage alt="" src="../images/menu.svg" />}
      </MenuIconButton>
    </Container>
  );
};

export default Navbar;
