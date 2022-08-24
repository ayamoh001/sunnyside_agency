import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --clr-soft-red: hsl(7, 99%, 70%);
        --clr-yellow: hsl(51, 100%, 49%);
        --clr-dark-desaturated-cyan: hsl(167, 40%, 24%);
        --clr-dark-blue:hsl(198, 62%, 26%);
        --clr-dark-moderate-cyan: hsl(168, 34%, 41%);
        --clr-very-dark-desaturated-blue: hsl(212, 27%, 19%);
        --clr-very-dark-grayish-blue: hsl(213, 9%, 39%);
        --clr-dark-grayish-blue: hsl(232, 10%, 55%);
        --clr-grayish-blue: hsl(210, 4%, 67%);
        --clr-white: hsl(0, 0%, 100%);

        --ff-barlow: 'Barlow', sans-serif;
        --ff-fraunces: 'Fraunces', serif;
    }

    html,
    body {
        scroll-behavior: smooth;
        background-color: var(--clr-very-dark-grayish-blue);
        font-size: 18px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: var(--ff-barlow);
    }
`;
