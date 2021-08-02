import axios from 'axios';
import {
  ChangeEvent,
  Dispatch,
  FC,
  useContext,
  useState
} from 'react';
import { PostsContext } from '../contexts/PostsContext';
import {
  Title,
  Label,
  Input,
  TextArea,
  Button,
  FeedFormContainer,
  Modal,
  ButtonsContainer,
  CancelButton
} from './sharedElements';

interface EditAlertProps {
  setOpenEditAlert: Dispatch<React.SetStateAction<boolean>>;
  postId: number;
}

export const EditAlert: FC<EditAlertProps> = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { setPostEdited } = useContext(PostsContext);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  }

  const handleCancelButtonClick = () => {
    props.setOpenEditAlert(false);
  }

  const handlePostEdit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const editedPost = {
      title: title,
      content: content
    }

    axios.patch(`https://dev.codeleap.co.uk/careers/${props.postId}/`, editedPost);
    props.setOpenEditAlert(false);
    setPostEdited(true);
  }

  return (
    <Modal>
      <FeedFormContainer onSubmit={handlePostEdit}>
        <Title margin="0 0 30px 0">Edit item</Title>

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

        <ButtonsContainer>
          <CancelButton onClick={handleCancelButtonClick}>Cancel</CancelButton>
          <Button type="submit" disabled={!title || !content}>SAVE</Button>
        </ButtonsContainer>
      </FeedFormContainer>
    </Modal>
  );
}