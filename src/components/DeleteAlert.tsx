import {
  Dispatch,
  FC,
  useContext
} from "react";
import axios from "axios";
import styled from "styled-components";

import { PostsContext } from "../contexts/PostsContext";

import { Button, Title } from "./sharedElements";

const Modal = styled.div`
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

const Alert = styled.form`
  background: #FFFFFF;
  width: 661px;
  height: 168px;
  padding: 34px 49px;
  display: flex;
  flex-direction: column;
`;

const AlertTitle = styled(Title)`
  font-weight: 400;
`;

const AlertButton = styled(Button)`
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
`;

const AlertButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
  margin-left: auto;
`;

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