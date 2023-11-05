import React from "react";
import { SkillDiv} from "./SkillStyle";
import { MyImage } from "../lazyloading/LazyLoading";

function Skill({ skill }) {
  return (
    <SkillDiv
      whileHover={{ scale: 1.1, opacity: 0.8 }}
      initial={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      <MyImage src={skill.img} />
    </SkillDiv>
  );
}

export default Skill;
