/* Author: Callum Taylor */
/* Filename: Header.tsx */

// import packages
import * as React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { motion } from "framer-motion";

// declare styled components
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    width: 90%;
    align-items: center;
  }
`;

const HeaderContent = styled.div`
  width: 70%;
  margin: 3em;
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 0 20px 100px 20px;
  }
`;

const Title = styled.h2`
  font-size: calc(18px + (20 - 18) * ((100vw - 900px) / (1600 - 900)));
  color: #66fcf1;
`;

const SubtitleName = styled.h3`
  color: #ffffff;
  font-size: calc(32px + (40 - 32) * ((100vw - 900px) / (1600 - 900)));
`;

const SubtitleDesc = styled.h3`
  color: #ffffffbf;
  font-size: calc(32px + (40 - 32) * ((100vw - 900px) / (1600 - 900)));
`;

const Description = styled.p`
  color: #c5c6c7bf;
  font-size: calc(16px + (18 - 16) * ((100vw - 900px) / (1600 - 900)));

  @media only screen and (min-width: 900px) {
    width: 60%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px; max-width: 899px) {
    width: 80%;
  }
`;

const ScrollDowns = styled(motion.div)`
  align-items: center;
  justify-content: center;
  height: 100px;
  position: absolute;
  bottom: 6vh;
  display: flex;
  @media only screen and (max-width: 900px) {
    height: 35px;
  }
`;
const Mousey = styled.div`
  width: 3px;
  padding: 10px 15px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
  @media only screen and (max-width: 900px) {
    padding: 7px 10px;
    height: 25px;
  }
`;
const Scroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Wrapper id="home">
      <HeaderContainer>
        <HeaderContent>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>Hi there,</Title>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubtitleName>I'm Callum.</SubtitleName>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SubtitleDesc>I build intelligent digital solutions.</SubtitleDesc>
          </motion.div>
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Description>
              I am a Software Engineer based in Edinburgh, Scotland specialising
              in front-end and full stack application development. I am
              currently building intuitive solutions for{" "}
              <a
                href="https://www.sky.com/"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#66fcf1",
                }}
              >
                Sky
              </a>
              .
            </Description>
          </motion.div>
        </HeaderContent>
        <ImageContainer>
          <Logo />
        </ImageContainer>
      </HeaderContainer>
      <ScrollDowns
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Mousey>
          <Scroller></Scroller>
        </Mousey>
      </ScrollDowns>
    </Wrapper>
  );
};

export default Header;
