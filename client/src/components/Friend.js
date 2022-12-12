import React from "react";
import styled from "styled-components";

const SideBarFriend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0px;
`;

const SideBarFriendImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const SideBarFriendName = styled.span``;

function Friend({ friend }) {
  return (
    <SideBarFriend>
      <SideBarFriendImg src={friend.profileImg} alt="sidebar_img" />
      <SideBarFriendName>{friend.username}</SideBarFriendName>
    </SideBarFriend>
  );
}

export default Friend;
