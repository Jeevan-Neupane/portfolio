import React from "react";
import { Box, ImageDiv, SubBox, Text } from "./IntroStyle";
import ME from "../../assets/images/profile-img.png";
import TextChange from "../TextChange/TextChange";
import { MyImage } from "../lazyloading/LazyLoading";

function Intro() {
  const words = ["Front End Developer", "Computer Engineer", "Freelancer"];
  return (
    <Box>
      <SubBox>
        <Text
        
        >
          <h1>Hello Everyone</h1>
          <h3>
            My Name is <span>Jeevan Neupane</span>.
          </h3>
          <h6>
            I'm <TextChange words={words} />
          </h6>
        </Text>
      </SubBox>
      <ImageDiv
        initial={{ opacity: 0,y:100}}
        whileInView={{ opacity: 1,y:0}}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MyImage src={ME} />
      </ImageDiv>
    </Box>
  );
}

export default Intro;
