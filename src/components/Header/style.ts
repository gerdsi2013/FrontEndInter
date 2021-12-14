import styled from "styled-components";
import { theme } from "../../styles/theme";


export const HeaderContainer = styled.header`
  width: 100%;
  height: 5.625rem;

  background-color: ${theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;

  div > p > span {
    color: ${theme.colors.primary};
  }

  div > a {
    color: ${theme.colors.primary};
  }
`;
export const HeaderWrapper = styled.div`
  width: 90%;
  height: 5.635rem;

  display: flex;
  align-items: center;
  justify-content: space-between;


  img {
    width: 10.75rem;
    height: 3.8rem;
  }


`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  
  
`;
