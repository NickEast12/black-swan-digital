import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --mainColour: #57CAC5;
        --mainColourLighter: #7ad3ce;
        --background: #0B0C10;
        --altColour: #1F2833;
        --save: #0c1c3b;
        --offWhite: #C9C8CD;
        --lightGrey: #CCCCCC;
        --white: #FFFFFF;
        --black: #000000;
        --mainFont: Acumin;
        --titleFont: AcuminTitle;
        --testing: red dotted 1px;
        --trial: #EBEBEB;
        --servicesBackground: rgb(248, 248, 248);
        --boxShadow: 0 10px 50px rgba(0,0,0,0.08),0 13px 45px rgba(0,0,0,0.08);
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
    ::selection {
    background:var(--mainColour);
    color: var(--white);
    }
    .title--style {
      color: var(--mainColour);
      font-weight: 500;
      text-align: center;
      letter-spacing: -0.1px;
      text-transform: uppercase;
      margin: 1rem 0 0.5rem 0;
    
    }
    .title-fea {
        background: linear-gradient(transparent 60%, var(--mainColour) 60%);
        color: #111;
        padding: 0 1px 1px;
    }
    button {
        background: linear-gradient(to right, var(--mainColour), var(--mainColourLighter));
        border-radius: 4.5px;
        padding: .6rem 0;
        width: 100px;
        border: none;
        color: var(--white);
        cursor: pointer;
        span {
            font-weight: 600;
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
        height: 65px;
        transform: translateY(0);
        transition: all 0.3s ease;
    }
    .header.shadow {
        box-shadow: 0px 1px 10px hsla(0, 0%, 78%, 0.59);
        background: white;

    }

    .header.hidden {
        transform: translateY(-150%);
    }
    

   .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
    }
    ::placeholder {
          color: white !important;
        }
`;

export default GlobalStyles;
