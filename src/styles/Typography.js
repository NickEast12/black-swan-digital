import { createGlobalStyle } from 'styled-components';
//* Fonts
import mainFont from '../assets/fonts/Acumin-RPro.otf';
import titleFont from '../assets/fonts/Acumin-BdPro.otf';
import Karla from '../assets/fonts/Karla.ttf';
import Rubik from '../assets/fonts/Rubik.ttf';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import Poppins from '../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsLight from '../assets/fonts/Poppins-Light.ttf';
import Muli from '../assets/fonts/Muli.ttf';
import MuliBold from '../assets/fonts/Muli-Bold.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: Poppins;
        src: url(${Poppins});
    }
    @font-face {
        font-family: PoppinsLight;
        src: url(${PoppinsRegular});
    }
    @font-face {
        font-family: MuliBold;
        src: url(${MuliBold});
    }
    @font-face {
        font-family: Muli;
        src: url(${Muli});
    }
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
   
    h1,h2,h3,h4,h5,h6 , button {
        font-family:  Poppins , AcuminTitle, Rubik, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 500;
        letter-spacing: -.5px;
        
    }
    p, li, span, a, input, textarea, label   {
        font-family:  Muli, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
    }
    span {
        letter-spacing: -0.25px;
        
    }
    p, li {
        letter-spacing: -0.1px;
        
        line-height: 1.2;
    }
    
`;

export default Typography;
