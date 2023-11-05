import styled, { keyframes } from "styled-components";




const ChangingText = styled.span`
  font-size: 2.5rem;
  color: ${props => props.theme.valuableColor};
  text-transform:uppercase;
  font-family:${props=>props.theme.specialFontFamily};
  
`;

export {
  ChangingText
}

