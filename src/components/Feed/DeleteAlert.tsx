import axios from "axios";
import { Dispatch, FC, useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";
import {
  Modal,
  Alert,
  AlertButton,
  AlertTitle,
  AlertButtonsContainer
} from "./Feed.elements";

interface DeleteBoxProps {
  setOpenDeleteAlert: Dispatch<React.SetStateAction<boolean>>;
  postId: number;
}

const DeleteBox: FC<DeleteBoxProps> = (props) => {
  const { setPostDeleted } = useContext(PostsContext);

  const handleCancelButtonClick = () => {
    props.setOpenDeleteAlert(false);
  }

  const handlePostDelete = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    axios.delete(`https://dev.codeleap.co.uk/careers/${props.postId}/`);
    props.setOpenDeleteAlert(false);
    setPostDeleted(true);
  }

  return (
    <Modal>
      <Alert onSubmit={handlePostDelete}>
        <AlertTitle>
          Are you sure you want to delete this item?
        </AlertTitle>

        <AlertButtonsContainer>
          <AlertButton onClick={handleCancelButtonClick}>Cancel</AlertButton>
          <AlertButton type="submit">OK</AlertButton>
        </AlertButtonsContainer>
      </Alert>
    </Modal>
  );
}

export default DeleteBox;