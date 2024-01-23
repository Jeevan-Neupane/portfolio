import React from "react";
import { Main, TextDiv } from "./style";
import Quote from "../Quote/Quote";
import FavQuote from "../favQuote/FavQuote";

function MainLoader() {
  return (
    <Main>
      <span className='loader'></span>
      <TextDiv>Loading...</TextDiv>
    </Main>
  );
}

export default MainLoader;
