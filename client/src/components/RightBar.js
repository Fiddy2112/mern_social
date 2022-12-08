import React from "react";
import styled from "styled-components";
import { Users } from "../data/Data";

const RightBarContainer = styled.div`
  flex: 1;
`;

const RightBarWrapper = styled.div`
  padding: 10px 20px;
`;

const RightBarTitle = styled.h4`
  margin-bottom: 20px;
`;

const RightBarFriendList = styled.ul`
  list-style: none;
`;

const RightBarFriend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const RightBarProfileImgContainer = styled.div`
  position: relative;
`;

const RightBarProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const RightBarStatus = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #2ed573;
  border-radius: 50%;
  top: -2px;
  left: 26px;
  border: 1px solid #fff;
`;

const RightBarName = styled.span`
  font-size: 16px;
  margin-left: 10px;
`;

function RightBar() {
  return (
    <RightBarContainer>
      <RightBarWrapper>
        <RightBarTitle>Contacts</RightBarTitle>
        <RightBarFriendList>
          {Users.map((user) => (
            <RightBarFriend key={user.id}>
              <RightBarProfileImgContainer>
                <RightBarProfileImg src={user.profilePicture} alt="userOnl" />
                <RightBarStatus></RightBarStatus>
              </RightBarProfileImgContainer>
              <RightBarName>{user.username}</RightBarName>
            </RightBarFriend>
          ))}
        </RightBarFriendList>
      </RightBarWrapper>
    </RightBarContainer>
  );
}

export default RightBar;
