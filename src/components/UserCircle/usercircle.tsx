import { CircleContainer } from "./style";

interface userInfo {
  initias: string;
}

export function UserCircle({ initias }: userInfo) {
  return <CircleContainer>{initias}</CircleContainer>;
}
