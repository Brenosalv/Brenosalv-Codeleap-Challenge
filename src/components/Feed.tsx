import {
  FC,
  useContext,
  useRef
} from "react";
import styled from "styled-components";

import PostForm from "./PostForm";
import { Post } from "./Post";
import { Header, Title } from "./sharedElements";

import { PostsContext } from "../contexts/PostsContext";

const FeedContainer = styled.div`
  width: 800px;
  height: 100%;
  margin: auto;
  background-color: #FFFFFF;
`;

const FeedMain = styled.main`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  padding: 44px 38px;
`;

const Feed: FC = () => {
  const { allPosts, setPostsCount } = useContext(PostsContext);

  const containerRef = useRef<HTMLDivElement>(null);

  window.document.body.onscroll = (event) => {
    if (containerRef.current!.getBoundingClientRect().bottom <= window.innerHeight)
      setPostsCount(postsCount => postsCount + 1);
  }

  return (
    <FeedContainer ref={containerRef}>
      <Header>
        <Title color="#FFFFFF">CodeLeap Network</Title>
      </Header>

      <FeedMain>
        <PostForm />

        {allPosts.map(post => (
          <Post
            id={post.id}
            username={post.username}
            title={post.title}
            content={post.content}
            created_datetime={post.created_datetime}
          />
        ))}
      </FeedMain>
    </FeedContainer>
  );
}

export default Feed;