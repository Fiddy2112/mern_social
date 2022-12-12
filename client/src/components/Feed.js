import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import StatusPost from "./StatusPost";
import { Posts } from "../data/Data";
import axios from "axios";
import { StateContext } from "../context/contextProvider";

const FeedContainer = styled.div`
  flex: 2;
`;

const FeedWrapper = styled.div`
  padding: 10px 20px;
`;

function Feed() {
  const [posts, setPosts] = useState([]);

  const {
    state: { user },
  } = useContext(StateContext);

  console.log(user);

  console.log(posts);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/v1/post/timeline/${user._id}`
      );
      setPosts(
        response.data.sort((a, b) => {
          return new Date(b.createAt) - new Date(a.createAt);
        })
      );
    };
    getPosts();
  }, []);
  return (
    <FeedContainer>
      <FeedWrapper>
        <StatusPost />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </FeedWrapper>
    </FeedContainer>
  );
}

export default Feed;
