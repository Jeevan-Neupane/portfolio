import React, { useEffect, useRef } from "react";
import {
  Main,
  Wrapper,
  Title,
  TitleText,
  TextBox,
  ScollSymbol,
} from "./ProjectPageStyle";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import MobileNav from "../../components/Navbar/MobileNav";
import ScrollIcon from "../../components/scrollIcon/ScrollIcon";
import Socialcons from "../../components/Social Icons/Socialcons";
import Message from "../../components/Message/Message";
import ProgressBar from "../../components/progressbar/ProgressBar";

const variants = {
  scrollButton: {
 
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

function ProjectPage() {
  const ref = useRef(null);

  const { projects } = useSelector((state) => state.projectData);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
    };
    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <>
      <Main>
        <Navbar />
        <MobileNav />
        <TextBox>
          <Title>
            My <span>Projects</span>
          </Title>
          <TitleText>
            Some of my highlighting projects are listed below.
          </TitleText>
        </TextBox>
        <Wrapper ref={ref}>
          {projects.map((project) => {
            return (
              <ProjectCard
                project={project}
                key={project.id}
              />
            );
          })}
        </Wrapper>
        <ScollSymbol
          variants={variants}
          animate='scrollButton'
        >
          <ScrollIcon />
        </ScollSymbol>
        <Socialcons/>
       <Message/>
       <ProgressBar/>
      </Main>
    </>
  );
}

export default ProjectPage;
