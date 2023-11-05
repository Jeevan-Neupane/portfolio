import React from "react";

import { Main, MainContainer } from "./HomePageStyle";

import Intro from "../../components/Intro/Intro";
import Quote from "../../components/Quote/Quote";

function HomePage() {
  return (
    <Main>
      <MainContainer>
        <Intro />
        <Quote />
      </MainContainer>
    </Main>
  );
}

export default HomePage;
