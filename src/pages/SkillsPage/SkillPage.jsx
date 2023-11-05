import React from "react";
import {
  Box,
  Main,
  SkillContainer,
  SkillHeading,
  SkillWrapper,
  SkillsDiv,
  SutTitle,
  Title,
} from "./SkillPageStyle";
import { WrapperContainer } from "../../styles/Container";
import Skill from "../../components/Skill/Skill";
import {
  LangugesAndTools,
  Library,
  OtherLanguages,
  Others,
} from "../../data/SkillData";

function SkillPage() {
  return (
    <Main>
      <WrapperContainer>
        <Box>
          <Title>
            My <span>Skills</span>
          </Title>
          <SutTitle>
            Writing code using languages: C , C++ , HTML , CSS , JS and TS
          </SutTitle>
          <SkillsDiv>
            <SkillWrapper>
              <SkillHeading>Languages And Tools</SkillHeading>
              <SkillContainer>
                {LangugesAndTools.map((skill) => {
                  return (
                    <Skill
                      skill={skill}
                      key={skill.title}
                    />
                  );
                })}
              </SkillContainer>
            </SkillWrapper>
            <SkillWrapper>
              <SkillHeading>Library</SkillHeading>
              <SkillContainer>
                {Library.map((skill) => {
                  return (
                    <Skill
                      skill={skill}
                      key={skill.title}
                    />
                  );
                })}
              </SkillContainer>
            </SkillWrapper>
            <SkillWrapper>
              <SkillHeading>Other Languages</SkillHeading>
              <SkillContainer>
                {OtherLanguages.map((skill) => {
                  return (
                    <Skill
                      skill={skill}
                      key={skill.title}
                    />
                  );
                })}
              </SkillContainer>
            </SkillWrapper>
            <SkillWrapper>
              <SkillHeading>Others</SkillHeading>
              <SkillContainer>
                {Others.map((skill) => {
                  return (
                    <Skill
                      skill={skill}
                      key={skill.title}
                    />
                  );
                })}
              </SkillContainer>
            </SkillWrapper>
          </SkillsDiv>
        </Box>
      </WrapperContainer>
    </Main>
  );
}

export default SkillPage;
