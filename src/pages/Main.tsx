import { FC } from "react";
import Feed from "../components/Feed";
import GlobalStyle from "../globalStyles";

const Main: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Feed />
    </>
  )
}

export default Main;
