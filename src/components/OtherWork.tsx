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
  min-height: 60vh;
  align-items: center;
`;

const Container = styled(motion.div)`
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
  justify-content: center;
  position: relative;
  margin: 12px 8px 30px 0;
  width: 100%;
  white-space: nowrap;
`;

const ProjectListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 0;
`;

const Project = styled.li`
  position: relative;
  margin-top: 3rem;
`;

const Link = styled.a`
  text-decoration: none;
`;

const ProjectInner = styled(motion.div)`
  padding: 2rem 2rem 1rem 2rem;
  height: 100%;
  position: relative;
  background-color: #1f2e45;
  border-radius: 4px;
  transition: .5s;
  &:hover {
    transform: translate(0px, -20px);
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectTitle = styled.h5`
  color: #ffffff;
  font-size: calc(16px + (18 - 16) * ((100vw - 900px) / (1600 - 900)));
`;

const ProjectDesc = styled.p`
  color: #c5c6c7bf;
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

const textRiseVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

const OtherWork = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Wrapper>
      <Container
        variants={textRiseVariant}
        ref={ref}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5 }}
      >
        <Title>Other Projects</Title>
        <ProjectListContainer>
          <ProjectList>
            <Project>
              <Link href="https://github.com/taybluetooth/scot-rona-bot">
                <ProjectInner>
                  <IconsContainer>
                    <FontAwesomeIcon color="#c5c6c7bf" icon={["fas", "code"]} />
                    <a href="https://github.com/taybluetooth/scot-rona-bot">
                      <FontAwesomeIcon
                        size="2x"
                        color="#66FCF1"
                        icon={["fas", "up-right-from-square"]}
                      />
                    </a>
                  </IconsContainer>
                  <ProjectTitle>
                    Scottish COVID Statistics Twitter Bot
                  </ProjectTitle>
                  <ProjectDesc>
                    An automated twitter bot that published and broke down
                    Scottish Government COVID-19 statistics by region and
                    displayed in an easy to read table.
                  </ProjectDesc>
                  <Technologies className="project-techs">
                    <Technology>Python</Technology>
                    <Technology>Django</Technology>
                    <Technology>Twitter-API</Technology>
                    <Technology>Heroku</Technology>
                  </Technologies>
                </ProjectInner>
              </Link>
            </Project>

            <Project>
              <Link href="https://github.com/taybluetooth/reorient">
                <ProjectInner>
                  <IconsContainer>
                    <FontAwesomeIcon color="#c5c6c7bf" icon={["fas", "code"]} />
                    <a href="https://github.com/taybluetooth/reorient">
                      <FontAwesomeIcon
                        size="2x"
                        color="#66FCF1"
                        icon={["fas", "up-right-from-square"]}
                      />
                    </a>
                  </IconsContainer>
                  <ProjectTitle>
                    Reorient Sports Recommendation App
                  </ProjectTitle>
                  <ProjectDesc>
                    My dissertation project. Using a collaborative filtering
                    approach to recommend to users hobbies and activities based
                    on their existing interests.
                  </ProjectDesc>
                  <Technologies className="project-techs">
                    <Technology>Flutter</Technology>
                    <Technology>Dart</Technology>
                    <Technology>Node JS</Technology>
                    <Technology>Jupyter</Technology>
                    <Technology>Python</Technology>
                  </Technologies>
                </ProjectInner>
              </Link>
            </Project>
            <Project>
              <Link href="https://github.com/taybluetooth/atmos-forecast">
                <ProjectInner>
                  <IconsContainer>
                    <FontAwesomeIcon color="#c5c6c7bf" icon={["fas", "code"]} />
                    <a href="https://github.com/taybluetooth/atmos-forecast">
                      <FontAwesomeIcon
                        size="2x"
                        color="#66FCF1"
                        icon={["fas", "up-right-from-square"]}
                      />
                    </a>
                  </IconsContainer>
                  <ProjectTitle>Atmos Weather Web App</ProjectTitle>
                  <ProjectDesc>
                    A weather web application, utilising Python3, Flask and
                    Jinja2 to process weather in 200,000 cities and towns
                    globally.
                  </ProjectDesc>
                  <Technologies className="project-techs">
                    <Technology>Python</Technology>
                    <Technology>Django</Technology>
                    <Technology>Jinja2</Technology>
                    <Technology>Beautiful Soup</Technology>
                    <Technology>HTML & CSS</Technology>
                  </Technologies>
                </ProjectInner>
              </Link>
            </Project>
          </ProjectList>
        </ProjectListContainer>
      </Container>
    </Wrapper>
  );
};

export default OtherWork;
