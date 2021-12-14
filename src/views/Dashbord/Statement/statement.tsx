import { format } from "date-fns";
import {
  StatementContainer,
  StatementIntemImage,
  StementIntemInfo,
  StatementIntemContainer,
} from "./style";
import {FiDollarSign} from "react-icons/fi"

interface StatementItem {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
  updateAt: Date;
}

const StatementIntem = ({ user, value, type, updateAt }: StatementItem) => {
  return (
    <StatementIntemContainer>
      <StatementIntemImage type={type}>

          <FiDollarSign size={24} />
      </StatementIntemImage>

      <StementIntemInfo>
        <p className="primary-color" >
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}{" "}
        </p>

        <p>
          {type === "pay" ? "PAGO A " : "RECEBIDO DE "}{" "}
          <strong>
            {user.firstName}
            {user.lastName}
          </strong>
        </p>

        <p className="primary-color" > {format(updateAt, "dd/MM/yyyy 'ás' HH:mm:'h'")} </p>
      </StementIntemInfo>
    </StatementIntemContainer>
  );
};
export function Statement() {
  const statements: StatementItem[] = [
    {
      user: {
        firstName: "Gerd ",
        lastName: "Silva",
      },
      value: 250.0,
      type: "pay",
      updateAt: new Date(),
    },
    {
      user: {
        firstName: "João ",
        lastName: "Santos",
      },
      value: 270.0,
      type: "received",
      updateAt: new Date(),
    },
  ];

  return (
    <StatementContainer>
      {statements.map((statement) => (
        <StatementIntem {...statement} />
      ))}
    </StatementContainer>
  );
}
