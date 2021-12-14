import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const CardContainer = styled.div<{
  width: string;
  heigth: string;
  noShadow: boolean;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background: ${theme.colors.background};

  ${(props) =>
    !props.noShadow &&
    css`
      box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}

  border-radius: 0.8rem;

  padding: 0.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 5000;

  /* Responsividade */
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
