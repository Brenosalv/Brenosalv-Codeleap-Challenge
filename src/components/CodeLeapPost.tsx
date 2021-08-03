import { FC, useState } from "react";
import TimeAgo from 'react-timeago';
import styled from "styled-components";

import DeleteAlert from "./DeleteAlert";
import { EditAlert } from "./EditAlert";
import { Title, Header } from "./sharedElements";

import { PostProps } from "../types/interfaces";

import { USER_KEY } from "../services/auth";
import { device } from "./responsiveness";

const PostContainer = styled.div`
  width: 100%;
  min-height: 328px;
  height: fit-content;
  background-color: #FFFFFF;
  border: 1px solid #999999;
  box-sizing: border-box;
  margin-bottom: 45px;
`;

const PostHeader = styled(Header)`
  width: 100%;
  height: 70px;
  padding: 0 25px 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostOptions = styled.div`
  img {
    cursor: pointer;

    @media ${device.mobileS} {
      width: 38px;
      height: 38px;
    }

    @media ${device.tablet} {
      width: 30px;
      height: 30px;
      :active {
        transform: scale(0.85);
      }
    }
  }

  img:nth-child(2) {
    margin-left: 23px;
  }
`;

const PostMain = styled.main`
  width: 100%;
  background-color: #FFFFFF;
  padding: 23px 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const PostContentHeader = styled.header`
  width: 100%;
  color: #777777;
`;

const PostContentMain = styled.h2`
  font-style: normal;
  font-weight: normal;
  color: #000000;
  float: left;
  
  @media ${device.mobileS} {
    font-size: 28px;
    line-height: 36px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`;

const UserName = styled.h6`
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  float: left;

  @media ${device.mobileS} {
    font-size: 28px;
    line-height: 36px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`;

const DateTime = styled(UserName)`
  font-weight: 400;
  float: right;
`;

const CodeLeapPost: FC<PostProps> = (props) => {
  const loggedUserName = localStorage.getItem(USER_KEY);

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [openEditAlert, setOpenEditAlert] = useState(false);

  const handleDeleteButtonClick = () => {
    setOpenDeleteAlert(true);
  }

  const handleEditButtonClick = () => {
    setOpenEditAlert(true);
  }

  return (
    <PostContainer>
      <PostHeader>
        <Title color="#FFFFFF">{props.title}</Title>

        {props.username === loggedUserName && (
          <PostOptions>
            <img
              src="delete.svg"
              alt="Delete"
              onClick={handleDeleteButtonClick}
            />

            <img
              src="edit.svg"
              alt="Edit"
              onClick={handleEditButtonClick}
            />
          </PostOptions>
        )}
      </PostHeader>
      <PostMain>
        <PostContentHeader>
          <UserName>@{props.username}</UserName>
          <DateTime><TimeAgo date={props.created_datetime} /></DateTime>
        </PostContentHeader>

        <PostContentMain>
          {props.content}
        </PostContentMain>
      </PostMain>

      {openDeleteAlert && (
        <DeleteAlert
          setOpenDeleteAlert={setOpenDeleteAlert}
          postId={props.id}
        />
      )}

      {openEditAlert && (
        <EditAlert
          setOpenEditAlert={setOpenEditAlert}
          postId={props.id}
        />
      )}
    </PostContainer>
  );
}

export default CodeLeapPost;