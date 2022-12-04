import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Users } from "../data/Data";
import Friend from "./Friend";

const SideBarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(199, 199, 199);
  }
`;

const SideBarWrapper = styled.div`
  padding: 10px;
`;

const SideBarList = styled.ul`
  list-style: none;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #2f3542;
`;

const SideBarListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  &:hover {
    background-color: #f1f2f6;
    border-radius: 5px;
    cursor: pointer;
    color: ff6b81;
  }
`;

const Text = styled.span`
  color: #2f3542;
  font-size: 15px;
  font-weight: 500;
`;

const SideBarButton = styled.button`
  padding: 10px 40px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #ff6b81;
  color: #ff6b81;
  background-color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #ff6b81;
    color: #fff;
  }
`;

const SideBarHR = styled.hr`
  border: none;
  border-top: 0.5px solid #dfe4ea;
  margin: 10px 0px;
`;

const SideBarFriendList = styled.ul`
  list-style: none;
`;

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarList>
          <SideBarListItem>
            <Icon>
              <HomeOutlinedIcon />
            </Icon>
            <Text>Home</Text>
          </SideBarListItem>

          <SideBarListItem>
            <Icon>
              <RssFeedOutlinedIcon />
            </Icon>
            <Text>Feed</Text>
          </SideBarListItem>

          <SideBarListItem>
            <Icon>
              <ChatBubbleOutlineOutlinedIcon />
            </Icon>
            <Text>Chats</Text>
          </SideBarListItem>

          <SideBarListItem>
            <Icon>
              <GroupsOutlinedIcon />
            </Icon>
            <Text>Group</Text>
          </SideBarListItem>

          <SideBarListItem>
            <Icon>
              <PlayCircleFilledOutlinedIcon />
            </Icon>
            <Text>Videos</Text>
          </SideBarListItem>

          <SideBarListItem>
            <Icon>
              <EmojiEventsOutlinedIcon />
            </Icon>
            <Text>Events</Text>
          </SideBarListItem>
        </SideBarList>
        <SideBarButton>More ...</SideBarButton>
        <SideBarHR />
        <SideBarFriendList>
          {Users.map((user) => (
            <Friend user={user} />
          ))}
        </SideBarFriendList>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default SideBar;
