import { CardContainer } from "./style";

interface CardProps {
  width?: string;
  children?: React.ReactNode;
  heigth?: string;
  noShadow?: boolean;
}

export function Card({
  width = "100%",
  children,
  heigth = "auto",
  noShadow = false,
}: CardProps) {
  return (
    <CardContainer width={width} heigth={heigth} noShadow={noShadow}>
      {children}
    </CardContainer>
  );
}
