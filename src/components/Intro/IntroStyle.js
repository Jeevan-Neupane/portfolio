import styled from "styled-components";
import { labtop } from "../../styles/responsive";
import { motion } from "framer-motion";


const Box = styled.div`
position:relative;

display: flex;
${labtop({
    flexDirection: "column",
    height: "80vh",
    marginBottom: "0rem"
})}
 font-family:${props => props.theme.specialFontFamily};
margin-bottom:10rem;


`

const SubBox = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content:center;

`

const Text = styled(motion.div)`

h1{
    font-size:5rem;
    color:${props => props.theme.body};
}
h3{
    font-size:3rem;
    color:${props => props.theme.body};
    span{
       color:${props=>props.theme.beautyColor};
    }
}
h6{
    font-size:3rem;
    color:${props => props.theme.body};
}



`



const ImageDiv = styled(motion.div)`
display: flex;
align-items:center;
justify-content:center;
height:70%;
.lazy-load-image-background{
    display:block;
  
  
}

${labtop({

})}

`

const Img = styled.img`
`



export {
    Box,
    SubBox,
    Text,
    ImageDiv,
    Img,

}