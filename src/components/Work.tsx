/* Author: Callum Taylor */
/* Filename: Work.tsx */

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
  min-height: 50vh;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  margin: 3em;
  @media only screen and (max-width: 1024px) {
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
  margin: 12px 0px 30px;
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

const ProjectList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  counter-reset: number;
`;

const ProjectListItem = styled.li`
  margin-bottom: 80px;
  &:nth-of-type(2n + 1) .project-title,
  &:nth-of-type(2n + 1) .project-subtitle {
    text-align: right;
  }
  &:nth-of-type(2n + 1) .project-info {
    grid-column: 7 / -1;
  }
  &:nth-of-type(2n + 1) .project-image {
    grid-column: 1 / 8;
  }
  &:nth-of-type(2n + 1) .project-techs {
    justify-content: flex-end;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    &:nth-of-type(2n + 1) .project-info {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    &:nth-of-type(2n + 1) .project-image {
      grid-column: 1 / -1;
    }
    &:nth-of-type(2n + 1) .project-techs {
      justify-content: flex-start;
    }
    &:nth-of-type(2n + 1) .project-title,
    &:nth-of-type(2n + 1) .project-subtitle {
      text-align: left;
    }
    .project-image .img {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }
  @media only screen and (min-width: 769px; max-width: 1060px) {
    &:nth-of-type(2n + 1) .project-info {
      grid-column: 5 / -1;
    }
  }
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    @media only screen and (max-width: 768px) {
      opacity: 0.3;
    }
  }
`;

const ProjectContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  grid-area: 1 / 1 / -1 / 7;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  }
  @media only screen and (min-width: 769px; max-width: 1060px) {
    grid-column: 1 / 9;
  }
`;

const EntryTitle = styled.h3`
  color: #ffffff;
  text-align: left;
  counter-increment: number;
  font-size: calc(16px + (20 - 16) * ((100vw - 900px) / (1600 - 900)));
  margin: 0;
  &::before {
    content: "0" counter(number) ". ";
    color: #66fcf1;
    margin-right: 10px;
  }
`;

const EntrySubtitle = styled.p`
  color: #66fcf1;
  text-align: left;
  font-size: calc(14px + (16 - 14) * ((100vw - 900px) / (1600 - 900)));
`;

const DescriptionContainer = styled.div`
  background-color: #1f2e45;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  padding: 12px;
  @media only screen and (max-width: 768px) {
    background: transparent;
    padding: 0;
  }
`;

const Description = styled.p`
  display: flex;
  align-self: normal;
  color: #c5c6c7bf;
  font-size: calc(14px + (16 - 14) * ((100vw - 900px) / (1600 - 900)));
  padding: 12px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: auto;
    height: 100%;
    opacity: 0.3;
    grid-column: 1 / -1;
  }
`;

const Technologies = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  z-index: 6;
  margin: 25px 0 10px;
  padding: 0;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    margin: 25px 0px;
    justify-content: flex-start;
  }
`;

const Technology = styled.li`
  display: inline-block;
  margin: 0 10px 0 0;
  color: #c5c6c7bf;
  font-family: "Source Code Pro", monospace;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const textRiseVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const Work = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Wrapper id="work">
      <Container>
        <motion.div
          variants={textRiseVariant}
          ref={ref}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.5 }}
        >
          <Title>Projects I've Worked On</Title>
        </motion.div>
        <ProjectList>
          <ProjectListItem>
            <Link href="https://www.scrapprecycling.com/solutions/offices">
              <ProjectContainer
                className="project"
                variants={textRiseVariant}
                ref={ref}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5 }}
              >
                <ProjectInfo className="project-info">
                  <EntryTitle className="project-title">
                    Scrapp Dashboard
                  </EntryTitle>
                  <EntrySubtitle className="project-subtitle">
                    Commercial Project
                  </EntrySubtitle>
                  <DescriptionContainer className="project-description">
                    <Description>
                      Scrapp's data insights platform. The dashboard is linked
                      to the app. Whenever a user scans products in the app
                      their respective statistics can be viewed on the dashboard
                      as well as other points of interest within their recycling
                      schema.
                    </Description>
                  </DescriptionContainer>
                  <Technologies className="project-techs">
                    <Technology>React</Technology>
                    <Technology>JS</Technology>
                    <Technology>MUI</Technology>
                    <Technology>Node</Technology>
                    <Technology>Express</Technology>
                  </Technologies>
                </ProjectInfo>
                <ImageContainer className="project-image">
                    <StaticImage
                      className="img"
                      imgStyle={{ borderRadius: "4px", objectFit: "cover" }}
                      alt=""
                      src="../images/dashboard.png"
                    />

                </ImageContainer>
              </ProjectContainer>
            </Link>
          </ProjectListItem>

          <ProjectListItem>
          <Link href="https://www.scrapprecycling.com/mobile-app">
            <ProjectContainer
              className="project"
              variants={textRiseVariant}
              ref={ref}
              initial="hidden"
              animate={control}
              transition={{ duration: 0.5 }}
            >
              <ProjectInfo className="project-info">
                <EntryTitle className="project-title">
                  Scrapp Mobile App
                </EntryTitle>
                <EntrySubtitle className="project-subtitle">
                  Commercial Project
                </EntrySubtitle>
                <DescriptionContainer className="project-description">
                  <Description>
                    See how to recycle any household product correctly. Simply
                    scan the barcode to sort packaging into the right bin -
                    according to your local recycling rules.
                  </Description>
                </DescriptionContainer>
                <Technologies className="project-techs">
                  <Technology>Flutter</Technology>
                  <Technology>Dart</Technology>
                  <Technology>iOS</Technology>
                  <Technology>Android</Technology>
                  <Technology>SQL</Technology>
                </Technologies>
              </ProjectInfo>
              <ImageContainer className="project-image">
                  <StaticImage
                    width={1280}
                    height={720}
                    className="img"
                    imgStyle={{ borderRadius: "4px", objectFit: "cover" }}
                    alt=""
                    src="../images/scrapp-app.png"
                  />
              </ImageContainer>
            </ProjectContainer>
            </Link>
          </ProjectListItem>
        </ProjectList>
      </Container>
    </Wrapper>
  );
};

export default Work;
