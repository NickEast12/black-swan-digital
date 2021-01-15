import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --mainColour: #57CAC5;
        --blackswansarered: #CD292C;
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
        --maxBreakpoint: 1300px;
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
        -webkit-font-smoothing: subpixel-antialiased !important; 
        text-rendering:optimizeLegibility !important;
        
    }
    a[aria-current="page"] {
        color: var(--favColour);
    }
    ::selection {
    background:var(--mainColour);
    color: var(--white);
    }
    @media only screen and (min-width: 0px) {
    .title--style {
        color: var(--mainColour);
          font-weight: 400;
          font-size: 1.1rem;
          letter-spacing: -.1px;
          text-transform: uppercase;
          display: block;
          font-family: PoppinsLight;
    
    }

    }
    @media only screen and (min-width: 414px)  {
    .title--style {
          font-size: 1.2rem;
        }
    }
    .title-fea {
        background: linear-gradient(transparent 60%, var(--mainColour) 60%);
        color: #111;
        padding: 0 1px 1px;
    }
    button {
        /* background: linear-gradient(to right, var(--mainColour), var(--mainColourLighter)); */
        background: var(--mainColour);
        border-radius: 4.5px;
        border: var(--mainColour) 2px solid;
        padding: .6rem 0;
        width: 100px;
        cursor: pointer;
        transform: all 0.3s ease;
        span {
            color: var(--black);
            font-weight: 500;
            transform: all 0.3s ease;
            font-family: Poppins;
            text-transform: uppercase;
            letter-spacing: -.1px;
            font-size: 13px;
            font-weight: 500;
        }
    }
    .button--alt {
        background: var(--background);
        color: var(--mainColour);

    }
    @media only screen and (min-width: 0px) {
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
    }
    @media only screen and (min-width: 768px) {
        header {
            height: 80px;
        }
        .title--style {
          font-size: 1.3rem;
        }
        button span {
            font-weight: -.5px;
        }
    }
    .header.shadow {
        box-shadow: 0px 1px 10px hsla(0, 0%, 78%, 0.59);
        background: white;
        button {
            background: var(--mainColour);
            span {
                color: var(--white);
            }
        }
        @media only screen and (min-width: 768px) {
        li {
            color: black!important;
        }

        }
       

    }
    .show li {
        color: var(--black);
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
