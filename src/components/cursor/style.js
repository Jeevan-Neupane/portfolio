import { motion } from "framer-motion";
import styled from "styled-components";
import { labtop, smallScreen } from "../../styles/responsive";

export const CursorDiv = styled(motion.div)`
width:30px;
height:30px;
position:fixed;
z-index:999;
border: 1px solid transparent;
border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%);
border-image-slice: 1;
border-radius:50%;

${labtop({
    display: "none"
})}

${smallScreen({
    display:"none"
})}
`

