import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`


*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
    
    font-family: 'Roboto' ,sans-serif;
}

body{
    background:${theme.colors.background};
}

input:focus{
    outline: none;

}

.primary-color{
    color: ${theme.colors.primary};
}
.text-format{
    font-size: 1.8rem;
}

`;
