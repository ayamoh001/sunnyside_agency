import styled from "styled-components";
import Image from "next/future/image";

export const Container = styled.div`
    padding: ${({padding}) => (padding ? padding : "0")};
    margin: ${({margin}) => margin ? margin : "0 auto"};
    max-width: ${({maxWidth}) => (maxWidth ? maxWidth : "1440px")};
    width: ${({width}) => (width ? width : "auto")};
    height: ${({height}) => (height ? height : "auto")};
    @media screen and (min-width:426px){
        padding: ${({lgpadding, padding}) => (lgpadding ? lgpadding : padding)};
        margin: ${({lgmargin, margin}) => lgmargin ? lgmargin : "0 auto"};
        width: ${({width, lgwidth }) => (lgwidth ? lgwidth : width)};
        height: ${({height, lgheight }) => (lgheight ? lgheight : height)};
    }
`;
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${({count}) => (count ? count : 1)},1fr);
    @media screen and (min-width:426px){
        grid-template-columns: repeat(${({lgCount, count}) => (lgCount ? lgCount : count)},1fr);
    }
`;

export const Flex = styled.div`
    display: flex;
    gap: ${({gap}) => (gap ? gap : "0")};
    flex-direction: ${({direction}) => (direction ? direction : "column")}${({reverse}) => reverse && "-reverse"};
    justify-content: ${({justify}) => (justify ? justify : "unset")};
    align-items: ${({align}) => (align ? align : "unset")};
    height: ${({height}) => (height ? height : "auto")};
    width: ${({width}) => (width ? width : "auto")};
    color: ${({ color }) => (color ? color : "inherit")};

    @media screen and (min-width:426px){
        gap: ${({lggap, gap}) => (lggap ? lggap : gap)};
        flex-direction: ${({lgdirection, direction}) => (lgdirection ? lgdirection : direction)}${({lgreverse}) => lgreverse && "-reverse"};
        justify-content: ${({justify, lgjustify}) => (lgjustify ? lgjustify : justify)};
        align-items: ${({align, lgalign}) => (lgalign ? lgalign : align)};
    }
`;

export const Relative = styled.div`
    position: relative;
    width: ${({ width }) => (width ? width : "auto")};
    height: ${({ height }) => (height ? height : "auto")};
`;
export const FlowContent = styled.div`
    position: absolute;
    top: ${({ top }) => (top ? top : "auto")};
    left: ${({ left }) => (left ? left : "auto")};
    right: ${({ right }) => (right ? right : "auto")};
    bottom: ${({ bottom }) => (bottom ? bottom : "auto")};
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
`;

export const Bg = styled.div`
    background: ${({ bg }) => (bg ? bg : "#fff")};
`;
export const MyImage = styled(Image)`
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
    height: ${(props) => (props.height ? props.height + "%" : "auto")};
    padding: ${(props) => (props.padding ? props.padding : "0")};
    margin: ${(props) => (props.margin ? props.margin : "0")};
    border-radius: ${({borderradius}) => borderradius ? borderradius : "unset"};
    display: ${({display}) => display ? display : "block"};

    @media screen and (min-width:427px){
        display: ${({lgdisplay}) => lgdisplay ? lgdisplay : "block"};
    }
`;
export const Nav = styled.nav`
    display: ${(props) => (props.open ? "flex" : "none")};
    width: calc(100% - 3rem);
    position: absolute;
    top: 6rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--clr-white);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    &::after {
        content: "";
        border-width: 0 0 1.5rem 1.5rem;
        border-color: transparent transparent var(--clr-white) transparent;
        border-style: solid;
        top: 0;
        right: 0;
        position: absolute;
        transform: translateY(-100%);
    }

    @media screen and (min-width:427px){
        display: flex;
        position: static;
        background: none;
        transform: none;
        width: unset;
        &::after{
            content: none;
        }
    }
`;
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => (props.gap ? props.gap : "0")};
    list-style: none;
    gap: 1.25rem;
    padding: 2rem;
    li {
        color: var(--clr-grayish-blue);
    }
    @media screen and (min-width:427px){
        flex-direction: row;
        padding:0;
        gap:3rem;
        li {
        color: var(--clr-white);
        }
    }
`;

export const MyHeader = styled.div`
    display: flex;
    flex: 0 1 auto;
    align-items: center;
    padding: ${(props) => (props.padding ? props.padding : "0")};
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    @media screen and (min-width:426px){
        width: ${({width, lgwidth }) => (lgwidth ? lgwidth : width)};
        height: ${({height, lgheight }) => (lgheight ? lgheight : height)};
    }
`;

export const LogoDiv = styled.div`
    width: 100%;
    display: flex;
    img {
        width: 45%;
    }
`;