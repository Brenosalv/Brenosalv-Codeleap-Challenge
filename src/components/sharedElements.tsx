import styled from 'styled-components';
import { device } from './responsiveness';

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
  margin-bottom: 35px;

  @media ${device.mobileS} {
    height: 416px;
    font-size: 32px;
    line-height: 30px;
  }

  @media ${device.tablet} {
    height: 349px;
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  color: ${props => props.color};
  margin: ${(props: { margin?: string }) => props.margin ? props.margin : 0}px;

  @media ${device.mobileS} {
    font-size: 32px;
    line-height: 30px;
  }

  @media ${device.tablet} {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const Label = styled.h6`
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;

  @media ${device.mobileS} {
    font-size: 26px;
    line-height: 29px;
  }

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const Input = styled.input`
  border: 1px solid #777777;
  border-radius: 4px;
  width: 100%;
  padding: 6px 11px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin: ${(props: { margin: string }) => props.margin};
  font-style: normal;
  font-weight: normal;
  line-height: 16px;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    line-height: 16px;
    color: #CCCCCC;
  }

  @media ${device.mobileS} {
    height: 38px;
    font-size: 22px;
    ::placeholder {
      font-size: 22px;
    }
  }

  @media ${device.tablet} {
    height: 28px;
    font-size: 14px;
    ::placeholder {
      font-size: 14px;
    }
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
  font-style: normal;
  font-weight: normal;
  ::placeholder {
    font-style: normal;
    font-weight: normal;
    color: #CCCCCC;
  }

  @media ${device.mobileS} {
    font-size: 22px;
    line-height: 26px;
    ::placeholder {
      font-size: 22px;
      line-height: 26px;
    }
  }

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 16px;
    ::placeholder {
      font-size: 14px;
    }
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
  border: none;
  float: right;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
  :disabled {
    background: grey;
    cursor: default;
  }
  :active {
    transform: scale(0.95);
  }

  @media ${device.mobileS} {
    width: 200px;
    height: 60px;
    font-size: 24px;
  }

  @media ${device.tablet} {
    width: 111px;
    height: 33px;
    font-size: 16px;
  }
`;

export const CancelButton = styled(Button)`
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
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