import { FC } from "react";
import Feed from "../components/Feed/Feed";
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
