import {
  Button,
  Input,
  Label,
  SignUpFormContainer,
} from "./Form.elements";
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import { Title } from "../Shared.elements";
import { USER_KEY } from "../../services/auth";

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
      <Title margin="0 0 30px 0">Welcome to CodeLeap network</Title>
      <Label>Please enter your username</Label>
      <Input
        placeholder="John doe"
        value={userName}
        onChange={handleInputChange}
        margin="13px 0 20px 0"
      />
      <Button
        type="submit"
        disabled={!userName}
      >
        ENTER
      </Button>
    </SignUpFormContainer>
  )
}

export default SignUpForm;