import React from "react";
import { LoaderDiv } from "./LoaderStyle";

function Loader() {
  return (
    <LoaderDiv>
      <div class='lds-heart'>
        <div></div>
      </div>
    </LoaderDiv>
  );
}

export default Loader;
