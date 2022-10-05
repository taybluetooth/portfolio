/* Author: Callum Taylor */
/* Filename: About.tsx */

// import packages
import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faCode, faUpRightFromSquare);

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 3vh;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  margin: 3em;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em
  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 8px;
  }
`;

const Description = styled.p`
  width: 60%;
  text-align: center;
  color: #c5c6c7bf;
  margin: 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Description>Built by Callum Taylor.</Description>
        <Description>Design inspired by Brittany Chiang.</Description>
      </Container>
    </Wrapper>
  );
};

export default Footer;
