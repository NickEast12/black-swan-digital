import { createGlobalStyle } from 'styled-components';
//* Fonts
import mainFont from '../assets/fonts/Acumin-RPro.otf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Acumin;
        src: url(${mainFont});
    }
    a, a:visted { 
        text-decoration: none;
        color: inherit;
    }
    a[-webkit-any-link] {
        text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: var(--mainFont), Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    p, li, span, button  {
        font-family: var(--mainFont), Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6, p, li, span {
        letter-spacing: -.1px;
        line-height: 1.2;
    }
    
`;

export default Typography;
