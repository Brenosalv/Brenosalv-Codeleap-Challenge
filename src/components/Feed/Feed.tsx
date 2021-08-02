import { FC, useContext } from "react";
import PostForm from "../Form/PostForm";
import { Title } from "../Form/Form.elements";
import CodeLeapPost from "./CodeLeapPost";
import {
  FeedContainer,
  FeedHeader,
  FeedMain
} from "./Feed.elements";

import { PostsContext } from "../../contexts/PostsContext";

const Feed: FC = () => {
  const { allPosts } = useContext(PostsContext);

  return (
    <FeedContainer>
      <FeedHeader>
        <Title color="#FFFFFF">CodeLeap Network</Title>
      </FeedHeader>

      <FeedMain>
        <PostForm />

        {allPosts.map(post => (
          <CodeLeapPost
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
