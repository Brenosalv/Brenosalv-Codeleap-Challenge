import { FC } from "react";
import { Title } from "../Shared.elements";
import {
  PostContentHeader,
  PostHeader,
  PostMain,
  UserName,
  DateTime,
  PostContainer,
  PostContentMain,
  PostOptions
} from "./Feed.elements";
import TimeAgo from 'react-timeago';

import { PostProps } from "../../types/interfaces";

import { USER_KEY } from "../../services/auth";

const CodeLeapPost: FC<PostProps> = (props) => {
  const loggedUserName = localStorage.getItem(USER_KEY);

  return (
    <PostContainer>
      <PostHeader>
        <Title color="#FFFFFF">{props.title}</Title>

        {props.username === loggedUserName && (
          <PostOptions>
            <img src="delete.svg" alt="Delete" />
            <img src="edit.svg" alt="Edit" />
          </PostOptions>
        )}
      </PostHeader>
      <PostMain>
        <PostContentHeader>
          <UserName>{props.username}</UserName>
          <DateTime><TimeAgo date={props.created_datetime} /></DateTime>
        </PostContentHeader>

        <PostContentMain>
          {props.content}
        </PostContentMain>
      </PostMain>
    </PostContainer>
  );
}

export default CodeLeapPost;