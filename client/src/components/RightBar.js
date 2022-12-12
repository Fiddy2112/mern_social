import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { StateContext } from "../context/contextProvider";
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
  const [listFriend, setListFriend] = useState([]);

  const {
    state: { user },
  } = useContext(StateContext);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/user/friend/${user._id}`
      );

      setListFriend(res.data.friendList);
    };
    getFriends();
  }, [user._id]);

  console.log(listFriend);
  return (
    <RightBarContainer>
      <RightBarWrapper>
        <RightBarTitle>Contacts</RightBarTitle>
        <RightBarFriendList>
          {listFriend.map((friend) => (
            <RightBarFriend key={friend._id}>
              <RightBarProfileImgContainer>
                <RightBarProfileImg src={friend.profileImg} alt="userOnl" />
                <RightBarStatus></RightBarStatus>
              </RightBarProfileImgContainer>
              <RightBarName>{friend.username}</RightBarName>
            </RightBarFriend>
          ))}
        </RightBarFriendList>
      </RightBarWrapper>
    </RightBarContainer>
  );
}

export default RightBar;
