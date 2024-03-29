import { createGlobalStyle } from "styled-components";

import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif}') format('woff2');
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif_bold}') format('woff2');
        font-weight: bold;
        font-style: normal
    }
    
    body, input, select, textarea {
        font-family: 'ms_sans_serif';
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
    }

    body {
        background-color: #C6C6C6;
    }
`;
