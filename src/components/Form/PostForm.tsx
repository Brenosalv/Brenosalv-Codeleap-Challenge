import { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Title } from '../Shared.elements';
import {
  Button,
  Form,
  Input,
  Label,
  TextArea
} from './Form.elements';

const PostContainer = styled(Form)`
  width: 100%;
  height: 349px;
`;

const Post: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }

  return (
    <PostContainer>
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

      <Button disabled={!title || !content}>CREATE</Button>
    </PostContainer>
  );
}

export default Post;
