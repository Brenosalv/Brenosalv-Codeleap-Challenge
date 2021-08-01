import styled from 'styled-components';

export const Form = styled.form`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 28px 32px;
`;

export const Label = styled.h6`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Input = styled.input`
  border: 1px solid #777777;
  border-radius: 4px;
  width: 100%;
  height: 28px;
  padding: 6px 11px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: ${(props: {margin: string})=> props.margin};
  ::placeholder {
    color: #CCCCCC;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #777777;
  border-radius: 4px;
  width: 100%;
  height: 74px;
  padding: 6px 11px;
  display: flex;
  align-items: center;
  justify-content: left;
  resize: none;
  margin: ${(props: {margin: string})=> props.margin}px;
  ::placeholder {
    color: #CCCCCC;
  }
`;

export const Button = styled.button`
  background: #000000;
  color: #FFFFFF;
  width: 111px;
  height: 33px;
  border: none;
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