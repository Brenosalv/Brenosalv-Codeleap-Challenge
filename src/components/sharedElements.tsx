import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 37px;
  width: 100%;
  height: 80px;
  background-color: #000000;
`;

export const Form = styled.form`
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 28px 32px;
`;

export const FeedFormContainer = styled(Form)`
  width: 723px;
  height: 349px;
  margin-bottom: 35px;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: ${props => props.color};
  margin: ${(props: { margin?: string }) => props.margin ? props.margin : 0}px;
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
  margin: ${(props: { margin: string }) => props.margin};
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
  margin: ${(props: { margin: string }) => props.margin}px;
  ::placeholder {
    color: #CCCCCC;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
  margin-left: auto;
  float: right;
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

export const CancelButton = styled(Button)`
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
`;

export const UserName = styled.h6`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  float: left;
`;

export const DateTime = styled.h6`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  float: right;
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(119, 119, 119, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;