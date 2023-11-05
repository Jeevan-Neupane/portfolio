import React from "react";
import { WrapperContainer } from "../../styles/Container";
import { AiOutlinePhone } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import {
  ContactDiv,
  Description,
  Icon,
  IconInfoDiv,
  Info,
  InfoDiv,
  LeftDiv,
  Main,
  RightDiv,
  Title,
} from "./ContactPageStyle";
import Form from "../../components/Form/Form";

function ContactPage() {
  return (
    <Main>
      <WrapperContainer>
        <ContactDiv>
          <LeftDiv>
            <Title>
              Contact <span>Me</span>
            </Title>
            <Description>
              If you have any questions or would like to collaborate,please
              contact me
            </Description>
            <InfoDiv>
              <IconInfoDiv>
                <Icon>
                  <AiOutlinePhone />
                </Icon>
                <Info>+977-9745956296</Info>
              </IconInfoDiv>
            </InfoDiv>

            <InfoDiv>
              <IconInfoDiv>
                <Icon>
                  <FaLocationDot />
                </Icon>
                <Info>Basundhara,Kathmandu,Nepal</Info>
              </IconInfoDiv>
            </InfoDiv>
            <InfoDiv>
              <IconInfoDiv>
                <Icon>
                  <FiMail />
                </Icon>
                <Info>jeevan.neupane003@gmail.com</Info>
              </IconInfoDiv>
            </InfoDiv>
          </LeftDiv>
          <RightDiv>
            <Form />
          </RightDiv>
        </ContactDiv>
      </WrapperContainer>
    </Main>
  );
}

export default ContactPage;
