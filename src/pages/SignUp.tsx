import { FC  } from "react";
import SignUpForm from "../components/Form/SignUpForm";
import GlobalStyle from "../globalStyles";

const SignUp: FC = () => {
  return (
    <>
      <GlobalStyle />
      <SignUpForm />
    </>
  );
}

export default SignUp;