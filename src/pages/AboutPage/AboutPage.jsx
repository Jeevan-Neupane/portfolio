import React from "react";
import {
  Box,
  DetailBox,
  ImageDiv,
  IntroductionDiv,
  Main,
  SubBox,
  Title,
  TitleText,
} from "./AboutPageStyle";
import user from "../../assets/images/user.png";
import { WrapperContainer } from "../../styles/Container";
import { MyImage } from "../../components/lazyloading/LazyLoading";

function AboutPage() {
  return (
    <Main>
      <WrapperContainer>
        <IntroductionDiv>
          <Title>
            About <span>Me</span>
          </Title>
          <TitleText>Hi there,my name is Jeevan Neupane</TitleText>
        </IntroductionDiv>

        <Box>
          <ImageDiv
            initial={{ opacity: 0 ,y:-100}}
            animate={{ opacity: 1 ,y:0}}
            transition={{ duration: 1 }}
          >
            <MyImage src={user} />
          </ImageDiv>
          <SubBox
            initial={{ opacity: 0,y:-100 }}
            animate={{ opacity: 1,y:0 }}
            transition={{ duration: 1 }}
          >
            <DetailBox>
              <p>
                Hello, I'm Jeevan Neupane, a passionate and creative web
                developer with a strong drive to build elegant and functional
                websites that make a meaningful impact. With one years of
                experience in the ever-evolving world of web development, I have
                honed my skills to deliver not just websites, but digital
                experiences that engage and delight users.
              </p>
              <p>
                My journey in web development began with a curiosity to
                understand how the web works. Over the years, I have embraced
                the latest technologies and design trends to transform that
                curiosity into a career. I'm constantly exploring new frontiers
                in web development, staying up-to-date with the latest
                frameworks, libraries, and tools, and I thrive on pushing the
                boundaries of what's possible in the digital realm.
              </p>
              <p>
                What sets me apart is my unwavering commitment to creating
                websites that not only look fantastic but also function
                seamlessly. I believe in the power of clean, efficient code that
                ensures a smooth user experience. Whether I'm crafting
                responsive, mobile-friendly designs or optimizing for speed and
                performance, I take a holistic approach to web development.
              </p>
              <p>
                My toolbox includes proficiency in a wide range of technologies,
                including HTML5, CSS3, JavaScript, and various frameworks such
                as React and Angular.
              </p>

              <p>
                So, whether you're a business looking to elevate your online
                presence or a fellow developer interested in collaboration, I'm
                here to bring your web development dreams to life. Let's connect
                and create something remarkable together. Your vision, my
                expertise – together, we can build the web of tomorrow.
              </p>
            </DetailBox>
          </SubBox>
        </Box>
      </WrapperContainer>
    </Main>
  );
}

export default AboutPage;
