import { HeaderContainer, HeaderWrapper, UserInfo } from "./style";
import LogoInter from "../../assests/logo-inter.png";
import { UserCircle } from "../UserCircle/usercircle";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  const handleLogOff = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={LogoInter} alt="logo inter" />
        <UserInfo>
          <UserCircle initias="GS" />
          <div>
            <p>
              Olá. <span>Gerd</span>
            </p>
            <strong>22001123-1</strong> <br />
            <a href="#" onClick={handleLogOff}>
              Sair
            </a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
