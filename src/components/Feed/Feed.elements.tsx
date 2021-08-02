import styled from 'styled-components';
import { Button, Title } from '../Form/Form.elements';

export const FeedContainer = styled.div`
  width: 800px;
  height: 100%;
  margin: auto;
  background-color: #FFFFFF;
`;

export const FeedHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 37px;
  width: 100%;
  height: 80px;
  background-color: #000000;
`;

export const FeedMain = styled.main`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  padding: 44px 38px;
`;

export const PostContainer = styled.div`
  width: 100%;
  height: 328px;
  background-color: #FFFFFF;
  border: 1px solid #999999;
  box-sizing: border-box;
  margin-bottom: 45px;
`;

export const PostHeader = styled(FeedHeader)`
  width: 100%;
  height: 70px;
  padding: 0 25px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostOptions = styled.div`
  img {
    cursor: pointer;
    :active {
    transform: scale(0.85);
  }
  }

  img:nth-child(2) {
    margin-left: 23px;
  }
`;

export const PostMain = styled.main`
  width: 100%;
  background-color: #FFFFFF;
  padding: 23px 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const PostContentHeader = styled.header`
  width: 100%;
  color: #777777;
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

export const PostContentMain = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  float: left;
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

export const Alert = styled.form`
  background: #FFFFFF;
  width: 661px;
  height: 168px;
  padding: 34px 49px;
  display: flex;
  flex-direction: column;
`;

export const AlertTitle = styled(Title)`
  font-weight: 400;
`;

export const AlertButton = styled(Button)`
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
`;

export const AlertButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
  margin-left: auto;
`;