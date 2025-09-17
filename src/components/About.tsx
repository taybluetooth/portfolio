/* Author: Callum Taylor */
/* Filename: About.tsx */

// import packages
import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  margin: 3em;
  @media only screen and (max-width: 768px) {
    width: 90%;
    margin: 8px;
  }
`;

const Title = styled.h2`
  font-size: calc(24px + (28 - 24) * ((100vw - 900px) / (1600 - 900)));
  color: #ffffff;
  display: flex;
  align-items: center;
  position: relative;
  margin: 12px 8px 30px 0;
  width: 100%;
  white-space: nowrap;
  &::after {
    content: "";
    display: block;
    position: relative;
    width: 300px;
    height: 1px;
    left: 10px;
    background-color: #66fcf1;
    @media only screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;

const InnerContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-self: normal;
  color: #c5c6c7bf;
  font-size: calc(16px + (18 - 16) * ((100vw - 900px) / (1600 - 900)));
  margin: 12px 40px 30px 0px;

  @media only screen and (min-width: 1024px) {
    width: 60%;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
    margin-bottom: 1em;
  }
`;

const textRiseVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Wrapper id="about">
      <Container>
        <motion.div
          className="box"
          variants={textRiseVariant}
          ref={ref}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.5 }}
        >
          <Title>About Me</Title>
        </motion.div>
        <InnerContainer
          className="box"
          variants={textRiseVariant}
          ref={ref}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.5 }}
        >
          <Description>
            Hi there! My name is Callum Taylor and I am a Software Engineer
            based in Edinburgh. <br></br>
            <br></br>I graduated from Heriot-Watt University with a Master's Degreee with Distinction in Software Engineering.
            I studied Computer Science all throughout school,
            working on small projects in my spare time.
            <br></br>
            <br></br>
            As of 2023, I am currently working at Sky as a Frontend Developer, 
            having been drawn to the opportunity to work on exciting new products 
            and technologies that millions of people use daily.
          </Description>
          <ImageContainer>
            <StaticImage
              width={800}
              height={800}
              alt=""
              src="../images/callum.png"
            />
          </ImageContainer>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default About;
