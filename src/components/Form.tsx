import { ChangeEvent, FC, useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 28px 32px;
  width: 500px;
  height: 220px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

const Label = styled.h6`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 30px;
  margin-bottom: 13px;
`;

const Input = styled.input`
  border: 1px solid #777777;
  border-radius: 4px;
  width: 100%;
  height: 28px;
  padding: 6px 11px;
  ::placeholder {
    color: #CCCCCC;
  }
`;

const Button = styled.button`
  background: #000000;
  color: #FFFFFF;
  width: 111px;
  height: 33px;
  border: none;
  margin-top: 20px;
  float: right;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  :disabled {
    background: grey;
    cursor: default;
  }
  :active {
    transform: scale(0.95);
  }
`;

const FormContainer: FC = () => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  return (
    <Container>
      <Title>Welcome to CodeLeap network</Title>
      <Label>Please enter your username</Label>
      <Input
        placeholder="John Doe"
        value={userName}
        onChange={handleInputChange}
      />
      <Button disabled={!userName}>ENTER</Button>
    </Container>
  )
}

export default FormContainer;
