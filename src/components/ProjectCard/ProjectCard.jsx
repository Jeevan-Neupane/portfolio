import React from "react";
import {
  Box,
  Description,
  Footer,
  GitHubButton,
  Technology,
  TechnologyUsed,
  Title,
  VisitButton,
} from "./PorjectCardStyle";



function ProjectCard({ project }) {
  return (
    <Box >
      <Title>{project.name}</Title>
      <Description>{project.description}</Description>
      <TechnologyUsed>
        <h4>Technologies:</h4>
        {project.tags.map((tag) => {
          return <Technology key={tag}>{tag}</Technology>;
        })}
      </TechnologyUsed>
      <Footer>
        <VisitButton
          href={`${project.demo}`}
          target='_blank'
        >
          Visit
        </VisitButton>
        <GitHubButton
          href={`${project.github}`}
          target='_blank'
        >
          Github
        </GitHubButton>
      </Footer>
    </Box>
  );
}

export default ProjectCard;
