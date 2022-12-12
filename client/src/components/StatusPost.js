import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { useState } from "react";
import axios from "axios";
import { StateContext } from "../context/contextProvider";
import { useRef } from "react";

const StatusPostContainer = styled.div`
  width: 100%;
  // height: 150px;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

const StatusPostWrapper = styled.form`
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

const StatusPostText = styled.label`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const ShareImgContainer = styled.div`
  padding: 0 20px 10px 20px;
  position: relative;
`;
const ShareImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ShareCancelImg = styled.span`
  position: absolute;
  top: 0;
  right: 20px;
`;

function StatusPost() {
  const {
    state: { user },
  } = useContext(StateContext);

  const desc = useRef();

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("http://localhost:5000/api/v1/upload", data);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("http://localhost:5000/api/v1/post", newPost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StatusPostContainer>
      {file && (
        <ShareImgContainer>
          <ShareImg src={URL.createObjectURL(file)} alt="" />
          <ShareCancelImg>X</ShareCancelImg>
        </ShareImgContainer>
      )}
      <StatusPostWrapper onSubmit={handleSubmit}>
        <StatusPostTop>
          <StatusPostImg
            src={user.profileImg || "assets/avatar-female.png"}
            alt
          />
          <StatusPostInput
            type="text"
            placeholder={`${user.username}, What's on your mind ?`}
            ref={desc}
          />
          <StatusPostButton type="submit">Share</StatusPostButton>
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
              <StatusPostText htmlFor="file">Photo/video</StatusPostText>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => e.target.files[0]}
                hidden
              />
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
