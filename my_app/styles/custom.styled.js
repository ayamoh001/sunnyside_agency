import styled from "styled-components"

export const Bars = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 100vmax;
    @media screen and (min-width:800px){
        display:none;
    }
    
`;

export const StyledBtn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 100vmax;
    position: relative;
    width: fit-content;
    font-weight: ${(props) => (props.weight ? props.weight : 600)};
    padding: ${({ padding }) => (padding ? padding : 0)};
    color: ${({ color }) => (color ? color : "inherit")};
    font-size: ${({ size }) => (size ? size : "1rem")};
    font-family: ${({ font }) => (font ? font : "var(--ff-Barlow)")};
    letter-spacing: ${({ letterSpacing }) =>letterSpacing ? letterSpacing : "normal"};
    font-weight: ${({weight}) => weight ? weight : "600"};
    z-index: 1;
    &::before {
        content:"";
        position: absolute;
        bottom:0;
        left:50%;
        transform: translate(-50%);
        height: .4rem;
        width: 105%;
        background: ${({ bg }) => (bg ? bg : "#fff")};
        opacity: .25;
        z-index: -1;
    }
    &:hover::before{
        opacity:1;
    }
`;


export const ContactBtn = styled.button`
    background-color: var(--clr-yellow);
    border: none;
    border-radius: 100vmax;
    cursor: pointer;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: var(--ff-fraunces);
    @media screen and (min-width:800px){
        background-color: var(--clr-white);
    }
    &:hover{
        background: rgba(255, 255, 255, .25);
        color:var(--clr-white);
    }
`;