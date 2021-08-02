import { FC, useState } from "react";
import TimeAgo from 'react-timeago';
import styled from "styled-components";

import DeleteAlert from "./DeleteAlert";
import {
  Title,
  UserName,
  DateTime,
  Header
} from "./sharedElements";

import { PostProps } from "../types/interfaces";

import { USER_KEY } from "../services/auth";

const PostContainer = styled.div`
  width: 100%;
  height: 328px;
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
    :active {
    transform: scale(0.85);
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
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  float: left;
`;

const CodeLeapPost: FC<PostProps> = (props) => {
  const loggedUserName = localStorage.getItem(USER_KEY);

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleDeleteButtonClick = () => {
    setOpenDeleteAlert(true);
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
    </PostContainer>
  );
}

export default CodeLeapPost;