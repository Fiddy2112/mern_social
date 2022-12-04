import React, { useState } from "react";
import styled from "styled-components";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { Users } from "../data/Data";

const PostContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

const PostWrapper = styled.div`
  padding: 10px;
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TopProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopName = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const TopDate = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const TopRight = styled.div`
  cursor: pointer;
`;

const PostCenter = styled.div`
  margin: 20px 0;
`;

const PostText = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const PostImg = styled.img`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  object-fit: cover;
`;

const PostBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostLike = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
`;

const PostLikeLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 14px;
  font-weight: 400;
`;

const PostLikeRight = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const PostOptions = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  border-top: 0.5px solid #f1f2f6;
`;

const PostOption = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  padding: 5px 50px;

  &:hover {
    background-color: #f1f2f6;
    border-radius: 5px;
    cursor: pointer;
    color: ff6b81;
  }
`;

const PostIcon = styled.div`
  display: flex;
  align-items: center;
`;

const PostIconName = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
`;

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  console.log("like", like);
  console.log("isLiked", isLiked);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const user = Users.filter((u) => u.id === post.userId);
  console.log(user);
  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <TopLeft>
            <TopProfileImg src={user[0].profilePicture} alt="profile_img" />
            <TopTitle>
              <TopName>{user[0].username}</TopName>
              <TopDate>{post.date}</TopDate>
            </TopTitle>
          </TopLeft>
          <TopRight>
            <MoreHorizOutlinedIcon />
          </TopRight>
        </PostTop>
        <PostCenter>
          <PostText>{post.desc}</PostText>
          <PostImg src={post.photo} alt="post_img" />
        </PostCenter>
        <PostBottom>
          <PostLike>
            <PostLikeLeft>
              <ThumbUpOutlinedIcon style={{ color: "#1e90ff" }} />
              {!isLiked ? "" : "You, and"} {like.post} others
            </PostLikeLeft>
            <PostLikeRight>{post.comment} comments</PostLikeRight>
          </PostLike>
          <PostOptions>
            {!isLiked ? (
              <PostOption onClick={likeHandler}>
                <PostIcon>
                  <ThumbUpOutlinedIcon />
                </PostIcon>
                <PostIconName>Like</PostIconName>
              </PostOption>
            ) : (
              <PostOption onClick={likeHandler} style={{ color: "#1e90ff" }}>
                <PostIcon>
                  <ThumbUpOutlinedIcon />
                </PostIcon>
                <PostIconName>Like</PostIconName>
              </PostOption>
            )}

            <PostOption>
              <PostIcon>
                <ModeCommentOutlinedIcon />
              </PostIcon>
              <PostIconName>Comment</PostIconName>
            </PostOption>

            <PostOption>
              <PostIcon>
                <IosShareOutlinedIcon />
              </PostIcon>
              <PostIconName>Share</PostIconName>
            </PostOption>
          </PostOptions>
        </PostBottom>
      </PostWrapper>
    </PostContainer>
  );
}

export default Post;
