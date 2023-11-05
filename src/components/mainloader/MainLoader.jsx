import React from "react";
import { Main } from "./style";
import Quote from "../Quote/Quote";
import FavQuote from "../favQuote/FavQuote";

function MainLoader() {
  return (
    <Main>
      <FavQuote />
      <span className='loader'></span>
    </Main>
  );
}

export default MainLoader;
