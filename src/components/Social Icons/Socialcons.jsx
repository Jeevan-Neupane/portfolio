import { NavLink } from "react-router-dom";
import { Icons, Line, IconDiv } from "./SocialIconsStyle";
import { Github } from "../Svgs/GitHub";
import { Twitter } from "../Svgs/Twitter";
import { AiFillLinkedin } from "react-icons/ai";

function Socialcons() {
  return (
    <Icons>
      <IconDiv whileHover={{ scale: 1.2 }}>
        <a
          href='https://github.com/Jeevan-Neupane'
          target='_blank'
        >
          {" "}
          <Github
            height={25}
            width={25}
            fill='white'
          />
        </a>
      </IconDiv>
      <IconDiv whileHover={{ scale: 1.2 }}>
        <a
          href='https://twitter.com/JeevanNeup38484'
          target='_blank'
        >
          <Twitter
            height={25}
            width={25}
            fill='white'
          />
        </a>
      </IconDiv>
      <IconDiv whileHover={{ scale: 1.2 }}>
        <a
          href='https://www.linkedin.com/in/jeevan-neupane-16a407258/'
          target='_blank'
        >
          <AiFillLinkedin
            style={{ height: "25px", width: "25px", color: "white" }}
          />
        </a>
      </IconDiv>
      <Line />
    </Icons>
  );
}

export default Socialcons;
