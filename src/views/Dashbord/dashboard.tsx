import { Header } from "../../components/Header/header";
import {
  DashboardContainer,
  BodyContainer,
  InlineContainer,
  InlineTitle,
} from "./style";
import { Card } from "../../components/Card/card";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { Statement } from "./Statement/statement";


export function Dashboard() {
  const wallet = 5000;
  return (
    <DashboardContainer>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2>Saldo Atual</h2>
            </InlineTitle>

            <InlineContainer>
              <h3 className="primary-color text-format ">
                {wallet.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </InlineContainer>
          </Card>

          <Card noShadow width="90%">
            <InlineTitle>
              <h2>Receber PIX </h2>
            </InlineTitle>

            <InlineContainer>
              <Input style={{flex:1}} placeholder="Valor" />
              <Button>Gerar Código</Button>
            </InlineContainer>
{/* 
            <p>Pix copia e cola</p>
            <p>asdasdasdew2e2evdsd43v3</p> */}
          </Card>


          <Card noShadow width="90%">
            <InlineTitle>
              <h2>Pagar PIX </h2>
            </InlineTitle>

            <InlineContainer>
              <Input style={{flex:1}} placeholder="Insirar a chave" />
              <Button>Pagar PIX</Button>
            </InlineContainer>

          </Card>
        </div>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2>Extrato da conta</h2>
            </InlineTitle>
            <Statement></Statement>
          </Card>
        </div>
      </BodyContainer>
    </DashboardContainer>
  );
}
