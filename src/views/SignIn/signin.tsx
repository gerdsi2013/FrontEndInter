import { Wrapper, Background, ButtonContainer, InputContainer } from "./style";
import { Card } from "../../components/Card/card";
import ImgBackground from "../../assests/background-login.jpg";
import Logo from "../../assests/logo-inter.png";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { Link ,useNavigate } from "react-router-dom";

export function SignIn() {

   const navigate = useNavigate()

   const handleToSignIn = ()=>{
      navigate('/dashboard')
   }

  return (
    <Wrapper>
      <Background image={ImgBackground} />
      <Card width="25.18rem">
        <img src={Logo} width={172} height={61} alt="logo inter"></img>

        <InputContainer>
          <Input placeholder="EMAIL" type="email" />
          <Input placeholder="SENHA" type="password" />
        </InputContainer>

        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn} >Entrar</Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadastra-se Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
}
