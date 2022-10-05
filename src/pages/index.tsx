/* Author: Callum Taylor */
/* Filename: Navbar.tsx */

// import packages

import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import LogoSmall from "../components/LogoSmall";

library.add(faLinkedin, faGithub, faInstagram, faTwitter);

// import components
import Navbar from "../components/Navbar";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import OtherWork from "../components/OtherWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Wrapper = styled.main`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1400px;
  padding: 0 25px;
`;

const LoadLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoadWrapper = styled.main`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1400px;
  padding: 0 25px;
  display: contents;
`;

const Modal = styled.div`
  width: 0%;
  height: 100vh;
  display: flex;
  background-color: #1f2833;
  z-index: 40;
  position: fixed;
  right: 0;
  transition: 0.1s cubic-bezier(0.63, 0.53, 0.88, 0.74);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const SocialsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0;
  &::after {
    content: "";
    background-color: #c5c6c7bf;
    content: "";
    display: block;
    position: relative;
    width: 1px;
    height: 100px;
    bottom: 0;
  }
  @media only screen and (max-width: 1024px) {
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

const SocialsContainer = styled.div`
  orientation: left;
  bottom: 0;
  position: fixed;
  width: 40px;
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

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  right: 0;
  orientation: right;
  position: fixed;
  width: 40px;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Email = styled.a`
  color: #c5c6c7bf;
  writing-mode: vertical-rl;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 20px;
  font-family: "Source Code Pro", monospace;
  transition: 0.5s;
  &::after {
    content: "";
    background-color: #c5c6c7bf;
    content: "";
    display: block;
    position: relative;
    width: 1px;
    height: 100px;
    margin-top: 20px;
  }
  &:hover {
    color: #66fcf1;
    transition: 0.5s;
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => {
  // set sidebar to be visible
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <LoadLayout>
          <LoadWrapper>
            <ImageContainer>
              <LogoSmall />
            </ImageContainer>
          </LoadWrapper>
        </LoadLayout>
      ) : (
        <Layout>
          <Wrapper>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Modal
              onMouseLeave={() => setSidebarOpen(false)}
              style={sidebarOpen ? { width: "70%" } : {}}
            >
              <ResponsiveNavbar setSidebarOpen={setSidebarOpen} />
            </Modal>
            <div style={sidebarOpen ? { filter: "blur(20px)" } : {}}>
              <Header />
              <About />
              <Work />
              <OtherWork />
              <Contact />
              <Footer />
            </div>
          </Wrapper>
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
          <EmailContainer>
            <Email href="mailto:callumtaylorbusiness@gmail.com?subject=Business Enquiry from Portfolio.">
              callumtaylorbusiness@gmail.com
            </Email>
          </EmailContainer>
        </Layout>
      )}
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Callum Taylor</title>;
