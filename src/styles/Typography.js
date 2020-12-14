import { createGlobalStyle } from 'styled-components';
//* Fonts
import mainFont from '../assets/fonts/Acumin-RPro.otf';
import titleFont from '../assets/fonts/Acumin-BdPro.otf';
import Karla from '../assets/fonts/Karla.ttf';
import Rubik from '../assets/fonts/Rubik.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Acumin;
        src: url(${mainFont});
    }
    @font-face {
        font-family: AcuminTitle;
        src: url(${titleFont});
    }
    @font-face {
        font-family: Karla;
        src: url(${Karla});
    }
    @font-face {
        font-family: Rubik;
        src: url(${Rubik});
    }
    a, a:visted { 
        text-decoration: none;
        color: inherit;
    }
    a[-webkit-any-link] {
        text-decoration: none;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family:  Rubik, AcuminTitle, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        letter-spacing: -1px;
    }
    p, li, span, button, a, input, textarea  {
        font-family: Karla, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
    }
    span {
        letter-spacing: -.7px;
    }
    p, li {
        letter-spacing: -.1px;
        line-height: 1.2;
    }
    
`;

export default Typography;
