import styled from "styled-components";
import { theme } from "../../styles/theme";

export const DashboardContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${theme.colors.background2};


`;

export const BodyContainer = styled.main`
  width: 85%;
  margin-top: 2.5rem;

  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;

    & > div {
      margin-bottom: 1.25rem;
    }

    &::nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }

  /* Responsividade  */
  @media screen and (max-width:760px){
      flex-direction: column;
  };
`;
export const InlineTitle = styled.div`
  width: 100%;
  display: flex;
`;

export const InlineContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.25rem;

  div {
    flex: 4;
    margin-right: 1.25rem;
  }

  button {
    flex: 1;
  }
`;

