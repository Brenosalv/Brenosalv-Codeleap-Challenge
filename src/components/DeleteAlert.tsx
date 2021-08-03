import {
  Dispatch,
  FC,
  useContext
} from "react";
import axios from "axios";
import styled from "styled-components";

import { PostsContext } from "../contexts/PostsContext";

import {
  Button,
  Title,
  Modal,
  ButtonsContainer,
  CancelButton
} from "./sharedElements";

import { device } from "./responsiveness";

const AlertContainer = styled.form`
  background: #FFFFFF;
  width: 661px;
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    padding: 35px 34px;
    height: 240px;
  }

  @media ${device.tablet} {
    padding: 25px 34px;
    height: 168px;
  }
`;

const AlertTitle = styled(Title)`
  font-weight: 400;
`;

const ConfirmButton = styled(Button)`
  background: #FFFFFF;
  color: #000000;
  border: 1px solid #000000;
`;

interface DeleteAlertProps {
  setOpenDeleteAlert: Dispatch<React.SetStateAction<boolean>>;
  postId: number;
}

const DeleteBox: FC<DeleteAlertProps> = (props) => {
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
      <AlertContainer onSubmit={handlePostDelete}>
        <AlertTitle>
          Are you sure you want to delete this item?
        </AlertTitle>

        <ButtonsContainer>
          <CancelButton onClick={handleCancelButtonClick}>Cancel</CancelButton>
          <ConfirmButton type="submit">OK</ConfirmButton>
        </ButtonsContainer>
      </AlertContainer>
    </Modal>
  );
}

export default DeleteBox;