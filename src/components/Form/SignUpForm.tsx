import {
  Button,
  Form,
  Input,
  Label,
} from "./Form.elements";
import styled from 'styled-components';
import { ChangeEvent, useState } from "react";
import { useHistory } from "react-router";
import { Title } from "../Shared.elements";

const FormContainer = styled(Form)`
  width: 500px;
  height: 220px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -110px;
`;

const SignUpForm = () => {
  const history = useHistory();

  const [userName, setUserName] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handleButtonClick = () => {
    history.push('/main');
  }

  return (
    <FormContainer onSubmit={handleButtonClick}>
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
    </FormContainer>
  )
}

export default SignUpForm;