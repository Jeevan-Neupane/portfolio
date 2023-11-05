import React from "react";
import { MessageBox } from "./MessageStyle";
import { AiTwotoneMessage } from "react-icons/ai";

function Message() {
  return (
    <MessageBox to='/contact'>
      <AiTwotoneMessage />
    </MessageBox>
  );
}

export default Message;
