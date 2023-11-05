import { motion } from "framer-motion";
import styled from "styled-components";
import { labtop } from "../../styles/responsive";


export const Bar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: green;
  transform-origin: 0%;
  ${labtop({
    display:"none"
  })}
`