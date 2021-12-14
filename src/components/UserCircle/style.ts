import styled from "styled-components";
import { theme } from "../../styles/theme";


export const CircleContainer = styled.div` 

width: 4rem;
height: 4rem;

border-radius: 50%;
border: 1px solid ${theme.colors.primary};

display: flex;
align-items: center;
justify-content: center;

margin-right: 1.75rem;

color: ${theme.colors.primary};
font-weight: 300;
font-size: 1.5rem;
  

/* responsividade */
@media (max-width:700px){
    display: none;
}
  

`