/* Author: Callum Taylor */
/* Filename: About.tsx */

// import packages
import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

library.add(faCode, faUpRightFromSquare);

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50vh;
  align-items: center;
  z-index: 8;
`;

const Container = styled(motion.div)`
  width: 70%;
  margin: 3em;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-content: center;
  position: relative;
  width: 60%;
  white-space: nowrap;
  text-align: center;
`;

const Description = styled.p`
  width: 60%;
  text-align: center;
  color: #c5c6c7bf;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 12px 18px;
  margin-top: 12px;
  border: 1px solid #66fcf1;
  color: #66fcf1;
  background: transparent;
  font-weight: 500;
  font-size: 100%;
  transition: 300ms;
  border-radius: 4px;

  &:hover {
    background-color: #66fcf13d;
    cursor: pointer;
    transition: background-color 300ms;
  }
`;

const Link = styled.a`text-decoration: none;`

const textRiseVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Wrapper id="contact">
      <Container
        variants={textRiseVariant}
        ref={ref}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5 }}
      >
        <Title>Get In Touch</Title>
        <Description>
          I'm currently not actively looking for opportunities, but I am always
          eager to hear them out! Come say hi! (I don't bite).
        </Description>
        <Link href="mailto:callumtaylorbusiness@gmail.com?subject=Business Enquiry from Portfolio.">
          <Button>Say Hello</Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Contact;
