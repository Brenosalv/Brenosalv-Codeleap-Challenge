import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import {
  Title,
  Button,
  Input,
  Label,
  Form
} from "./sharedElements";

import { USER_KEY } from "../services/auth";
import { device } from "./responsiveness";

const SignUpFormContainer = styled(Form)`
  @media ${device.mobileS} {
    width: 100vw;
    height: 100vh;
  }
  @media ${device.tablet} {
    width: 500px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -110px;
  }
`;

const EnterButton = styled(Button)`
  @media ${device.mobileS} {
    width: 100%;
    height: 60px;
    font-size: 24px;
  }

  @media ${device.tablet} {
    width: 111px;
    height: 33px;
    font-size: 16px;
  }
`;

const Welcome = styled(Title)`
  @media ${device.mobileS} {
    text-align: center;
    line-height: 36px;
  }

  @media ${device.tablet} {
    text-align: left;
    line-height: 21px;
  }
`;

const SignUpForm = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handleButtonClick = () => {
    localStorage.setItem(USER_KEY, userName);
    history.push('/main');
  }

  return (
    <SignUpFormContainer onSubmit={handleButtonClick}>
      <Welcome margin="0 0 30px 0">Welcome to CodeLeap network</Welcome>
      <Label>Please enter your username</Label>
      <Input
        placeholder="John doe"
        value={userName}
        onChange={handleInputChange}
        margin="13px 0 20px 0"
      />
      <EnterButton
        type="submit"
        disabled={!userName}
      >
        ENTER
      </EnterButton>
    </SignUpFormContainer>
  )
}

export default SignUpForm;