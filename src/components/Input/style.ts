import styled from "styled-components";
import { theme } from "../../styles/theme";


export const InputContainer = styled.div`
 width: 100%;
 height: 2.875rem;

 background:${theme.colors.background};
 border:1px solid ${theme.colors.primary};
 border-radius: 0.625rem;
 margin-bottom: 1.25rem;

 display: flex;
 justify-content: center;
 
 

 z-index: 5000;

 input{
     font-size: 0.75rem;
     font-weight: 400;
     background: transparent;
     border: 0;
     width: 100%;
     margin:0 1.35rem;
     
 }
`