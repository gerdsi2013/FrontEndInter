import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.875rem;

  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.background};
  border-radius: 0.625rem;
  margin-bottom: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 5000;
  
  cursor: pointer;

  &:hover {
    filter: opacity(0.8);
    transition: 0.2s;
  }
  &:disabled {
    filter: opacity(0.4);
    transition: 0.2s;
  }

  p{
      color: ${theme.colors.background};
       
  }
`;
