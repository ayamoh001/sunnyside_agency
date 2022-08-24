import styled from "styled-components"

export const Text = styled.p`
    font-size: ${(props) => (props.size ? props.size : "1rem")};
    font-family: ${(props) => props.font == "Fraunces" ? "var(--ff-fraunces)" : "var(--ff-barlow)"};
    font-weight: ${(props) => (props.weight ? props.weight : 600)};
    padding: ${({ padding }) => (padding ? padding : 0)};
    text-align: ${({align}) => align ? align : "center"};
    color: ${({ color }) => (color ? color : "inherit")};
    line-height: ${({ lineheight }) => (lineheight ? lineheight : "normal")};
    text-transform: ${({ textTransform }) => (textTransform ? textTransform : "none")};
    @media screen and (min-width:426px){
        justify-content: ${({justify, lgjustify}) => (lgjustify ? lgjustify : justify)};
        text-align: ${({align, lgalign}) => (lgalign ? lgalign : align)};
        font-size: ${({ lgsize, size }) => (lgsize ? lgsize : size)};
        line-height: ${({ lineheight, lglineheight }) => (lglineheight ? lglineheight : lineheight)};
    }
`;
export const Icon = styled.i`
    color: ${({color}) => color ? color : "white"};
    &:hover{
        color: ${({color, hcolor}) => hcolor ? hcolor : color};
    }
`

export const Hn = styled.h1`
    font-size: ${({ size }) => (size ? size : "2rem")};
    font-family: ${({ font }) => (font ? font : "var(--ff-Barlow)")};
    color: ${({ color }) => (color ? color : "black")};
    text-align: ${({ align }) => (align ? align : "center")};
    letter-spacing: ${({ letterSpacing }) => letterSpacing ? letterSpacing : "normal"};
    font-weight: ${({weight}) => weight ? weight : "600"};
    padding: ${({padding}) => padding ? padding : "0"};
    text-transform: ${({ textTransform }) => (textTransform ? textTransform : "none")};
    @media screen and (min-width:426px){
        font-size: ${({ lgsize, size }) => (lgsize ? lgsize : size)};
        text-align: ${({align, lgalign}) => (lgalign ? lgalign : align)};
    }
`;