import React from "react";
import styled from "styled-components";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

const StatusPostContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

const StatusPostWrapper = styled.div`
  padding: 10px;
`;

const StatusPostTop = styled.div`
  display: flex;
  align-items: center;
`;

const StatusPostImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const StatusPostInput = styled.input`
  border: none;
  width: 80%;
  outline: none;
  font-size: 18px;
`;

const StatusPostButton = styled.button`
  padding: 8px 30px;
  font-size: 18px;
  border: 1px solid #ff6b81;
  color: #ff6b81;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff6b81;
    color: #fff;
  }
`;

const StatusPostHr = styled.hr`
  border: none;
  border-top: 0.5px solid #dfe4ea;
  padding: 0 20px;
  margin: 10px 20px;
`;

const StatusPostBottom = styled.div`
  display: flex;
  align-items: center;
`;

const StatusPostItemList = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 10px;
`;

const StatusPostItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  padding: 5px;
  &:hover {
    background-color: #f1f2f6;
    border-radius: 5px;
    color: ff6b81;
  }
`;

const StatusPostIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: large;
`;

const StatusPostText = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

function StatusPost() {
  return (
    <StatusPostContainer>
      <StatusPostWrapper>
        <StatusPostTop>
          <StatusPostImg src="/assets/person/person3.jpg" alt />
          <StatusPostInput
            type="text"
            placeholder="Kai, What's on your mind ?"
          />
          <StatusPostButton>Share</StatusPostButton>
        </StatusPostTop>
        <StatusPostHr />
        <StatusPostBottom>
          <StatusPostItemList>
            <StatusPostItem>
              <StatusPostIcon>
                <VideocamOutlinedIcon
                  fontSize="large"
                  style={{ color: "#ff4757" }}
                />
              </StatusPostIcon>
              <StatusPostText>Live video</StatusPostText>
            </StatusPostItem>

            <StatusPostItem>
              <StatusPostIcon>
                <PhotoLibraryOutlinedIcon
                  fontSize="large"
                  style={{ color: "#2ed573" }}
                />
              </StatusPostIcon>
              <StatusPostText>Photo/video</StatusPostText>
            </StatusPostItem>

            <StatusPostItem>
              <StatusPostIcon>
                <EmojiEmotionsOutlinedIcon
                  fontSize="large"
                  style={{ color: "#eccc68" }}
                />
              </StatusPostIcon>
              <StatusPostText>Feeling/activity</StatusPostText>
            </StatusPostItem>
          </StatusPostItemList>
        </StatusPostBottom>
      </StatusPostWrapper>
    </StatusPostContainer>
  );
}

export default StatusPost;
