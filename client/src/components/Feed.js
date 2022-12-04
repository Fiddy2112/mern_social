import React from "react";
import styled from "styled-components";
import Post from "./Post";
import StatusPost from "./StatusPost";
import { Posts } from "../data/Data";

const FeedContainer = styled.div`
  flex: 2;
`;

const FeedWrapper = styled.div`
  padding: 10px 20px;
`;

function Feed() {
  return (
    <FeedContainer>
      <FeedWrapper>
        <StatusPost />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </FeedWrapper>
    </FeedContainer>
  );
}

export default Feed;
