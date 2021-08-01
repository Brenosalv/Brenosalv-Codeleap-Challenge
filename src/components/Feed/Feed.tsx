import { FC } from "react";
import PostForm from "../Form/PostForm";
import { Title } from "../Shared.elements";
import { Container, Header, Main } from "./Feed.elements";

const Feed: FC = () => {
  return (
    <Container>
      <Header>
        <Title margin="0" color="#FFFFFF">CodeLeap Network</Title>
      </Header>
      <Main>
        <PostForm />
      </Main>
    </Container>
  );
}

export default Feed;
