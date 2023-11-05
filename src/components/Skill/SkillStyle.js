import styled from "styled-components";
import { motion } from "framer-motion";
import { smallMobile, smallScreen } from "../../styles/responsive";

const SkillDiv = styled(motion.div)`
display: flex;
align-items:center;
width:10rem;
height:10rem;
justify-content:center;
flex-direction:column;
padding:1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 25px, rgba(0, 0, 0, 0.3) 0px 5px 10px;
cursor:pointer;

${smallScreen({
    width:"7rem",
    height:"7rem"
})}
${smallMobile({
    width:"10rem",
    height:"10rem"
    
})}


`




export {
    SkillDiv,

}