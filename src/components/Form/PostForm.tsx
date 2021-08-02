import { ChangeEvent, FC, useContext, useState } from 'react';
import { PostProps } from '../../types/interfaces';
import { Title } from '../Shared.elements';
import {
  Button,
  PostFormContainer,
  Input,
  Label,
  TextArea
} from './Form.elements';

import {
  savePostsInfo,
  USER_KEY
} from '../../services/auth';
import { PostsContext } from '../../contexts/PostsContext';
import axios from 'axios';

const Post: FC = () => {
  const currentDateTime = new Date(); // implement difference between now and post creation date time
  const userName = localStorage.getItem(USER_KEY);

  const { allPosts } = useContext(PostsContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }

  const handlePostSubmission = () => {
    const newPost: PostProps = {
      id: allPosts ? allPosts.length + 1 : 1,
      username: userName!,
      title: title,
      content: content,
      created_datetime: currentDateTime,
    }

    axios.post("https://dev.codeleap.co.uk/careers/", newPost)
      .then(response => {
        console.log(response.status);
        savePostsInfo(JSON.stringify([...allPosts, newPost]));
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

export default Post;
