import { Wrapper, Background, InputContainer,ButtonContainer } from "../SignUp/style";
import { Card } from "../../components/Card/card";
import ImgBackground from "../../assests/background-login.jpg";
import Logo from "../../assests/logo-inter.png";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { Link ,useNavigate } from "react-router-dom";

export function SignUp() {

   const navigate = useNavigate()

   const handleToSignUp = ()=>{
      navigate('/dashboard')
   }

  return (
    <Wrapper>
      <Background image={ImgBackground} />
      <Card width="25.18rem">
        <img src={Logo} width={172} height={61} alt="logo inter"></img>

        <InputContainer>
          <Input  placeholder="NOME" type="text" />
          <Input  placeholder="SOBRENOME" type="text" />
          <Input placeholder="EMAIL" type="email" />
          <Input placeholder="SENHA" type="password" />
          <Input placeholder="CONFIRMAR SENHA" type="password" />
        </InputContainer>

        <ButtonContainer>
          <Button type="button" onClick={handleToSignUp} >Entrar</Button>
          <p>
            Já tem sua conta? <Link to="/">Entre Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
}
