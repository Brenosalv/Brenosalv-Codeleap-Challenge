import {
  ChangeEvent,
  FC,
  useContext,
  useState
} from 'react';
import styled from "styled-components";
import axios from 'axios';

import {
  Title,
  Button,
  Input,
  Label,
  TextArea,
  Form
} from './sharedElements';

import {
  savePostsInfo,
  USER_KEY
} from '../services/auth';
import { PostsContext } from '../contexts/PostsContext';

const PostFormContainer = styled(Form)`
  width: 100%;
  height: 349px;
  margin-bottom: 35px;
`;

const PostForm: FC = () => {
  const userName = localStorage.getItem(USER_KEY);

  const { allPosts, setNewPost } = useContext(PostsContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }

  const handlePostSubmission = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const newPost = {
      username: userName!,
      title: title,
      content: content,
    }

    axios.post("https://dev.codeleap.co.uk/careers/", newPost)
      .then(response => {
        console.log(response.status);
        savePostsInfo(JSON.stringify([...allPosts, newPost]));
        setNewPost(true);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <PostFormContainer onSubmit={handlePostSubmission}>
      <Title margin="0 0 30px 0">What's on your mind?</Title>

      <Label>Title</Label>
      <Input
        margin="7px 0 19px 0"
        placeholder="Hello world"
        value={title}
        onChange={handleTitleChange}
      />

      <Label>Content</Label>
      <TextArea
        margin="7px 0 35px 0"
        placeholder="Content here"
        value={content}
        onChange={handleContentChange}
      />

      <Button type="submit" disabled={!title || !content}>CREATE</Button>
    </PostFormContainer>
  );
}

export default PostForm;