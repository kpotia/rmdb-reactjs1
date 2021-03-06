import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1e1e1e;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body{
        margin:0;
        padding: 0;
      

        h1{
            font-size: var(--fontSuperBig);
            font-weight: 600;
            color: var(--white);
        }

        h3{
            font-size: var(--fontMed);
            font-weight: 600;
            color: var(--white);
        }

        p {
            font-size: var(--fontSmall);
            color: var(--white);
        }
    }

`