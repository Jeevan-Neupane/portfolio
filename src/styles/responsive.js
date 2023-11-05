import { css } from 'styled-components';






export const computer = (props) => {
    return css`
        @media (max-width:1440px) {
            ${props}
            
        }
        `
}

export const labtop = (props) => {
    return css`
        @media (max-width:1024px) {
            ${props}
            
        }
    `
}

export const tab = (props) => {
    return css`
        @media (max-width:768px) {
            ${props}
            
        }
    `
}

export const mobile = (props) => {
    return css`
         @media (max-width: 576px) {
            ${props}
            
         }
    `
}



export const smallMobile = (props) => {
    return css`
         @media (max-width: 440px) {
            ${props}
            
         }
    `
}
export const smallScreen = (props) => {
    return css`
         @media (max-height: 800px) {
            ${props}
            
         }
    `
}