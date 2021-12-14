import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StatementContainer = styled.div`
  width: 100%;

  margin-top: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StatementIntemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.25rem;
`;

export const StementIntemInfo = styled.div`
  p {
    margin-bottom: 0.08rem;
  }
`;
export const StatementIntemImage = styled.div<{
  type: "pay" | "received";
}>`
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.background};

  border-radius: 0.625rem;
  border-bottom: 1.25rem;

  background-color: ${({ type, theme }) =>
    type === "pay" ? theme.colors.red : theme.colors.green}; ;
`;
