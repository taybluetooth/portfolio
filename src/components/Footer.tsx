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

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const SocialsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const Social = styled.li`
  transition: 0.5s;
  &:hover {
    transform: translate(0px, -5px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
  }
`;


const SocialLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #c5c6c7bf;
  transition: 0.5s;
  &:hover {
    color: #66fcf1;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
      <SocialsContainer>
            <SocialsList>
              <Social>
                <SocialLink href="https://www.linkedin.com/in/callum-taylor-edinburgh/">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={["fab", "linkedin"]}
                  />
                </SocialLink>
              </Social>
              <Social>
                <SocialLink href="https://github.com/taybluetooth">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={["fab", "github"]}
                  />
                </SocialLink>
              </Social>
              <Social>
                <SocialLink href="https://www.instagram.com/taybluetooth/?hl=en-gb">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={["fab", "instagram"]}
                  />
                </SocialLink>
              </Social>
              <Social>
                <SocialLink href="https://twitter.com/tay_callum/">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    icon={["fab", "twitter"]}
                  />
                </SocialLink>
              </Social>
            </SocialsList>
            </SocialsContainer>
        <Description>Built by Callum Taylor.</Description>
        <Description>Design inspired by Brittany Chiang.</Description>
      </Container>
    </Wrapper>
  );
};

export default Footer;
