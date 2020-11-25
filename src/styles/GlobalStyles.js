import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --mainColour: #57CAC5;
        --mainColourLighter: #7ad3ce;
        --background: #1F2833;
        --altColour: #0B0C10;
        --save: #0c1c3b;
        --offWhite: #C9C8CD;
        --lightGrey: #CCCCCC;
        --white: #FFFFFF;
        --mainFont: Acumin;
        --titleFont: AcuminTitle;
        --testing: red dotted 1px;
    }
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
   html {
        margin: 0;
        padding: 0;
   }
    body {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a[aria-current="page"] {
        color: var(--favColour);
    }
 
    
    .title-fea {
        background: linear-gradient(transparent 60%, var(--mainColour) 60%);
        color: #111;
        padding: 0 1px 1px;
    }
    button {
        background: linear-gradient(to right, var(--mainColour), var(--mainColourLighter));
        border-radius: 50px;
        padding: .6rem 0;
        width: 100px;
        border: none;
        color: var(--white);
        span {
            font-weight: 900;
            font-size: .89rem;
        }
    }
    .button--alt {
        background: var(--background);
        color: var(--mainColour);

    }
    header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        transform: translateY(0);
        transition: transform 0.3s ease;
    }
    .header.shadow {
        box-shadow: 0px 10px 20px hsla(0, 0%, 78%, 0.59);

    }

    .header.hidden {
        transform: translateY(-140%);
    }
    

   .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
`;

export default GlobalStyles;
