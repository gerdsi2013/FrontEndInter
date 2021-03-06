import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  position: relative;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div<{ image: any }>`
  position: absolute;

  width: 100%;
  top: 0;
  left: 0;
  height: 50vh;

  background-image: url(${({ image }) => image});
  background-size: contain;
  z-index: 1;
`;

export const InputContainer = styled.div`
  margin-top: 4.18rem;
  width: 90%;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  margin-top: 1.25rem;
  width: 90%;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 0.75rem;
    font-weight: 400;

    a {
      font-size: 1rem;
      font-weight: 700;
      color: ${theme.colors.primary};
    }
  }
`;
