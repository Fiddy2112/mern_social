import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StateContext } from "../context/contextProvider";

const ProfileInfoContainer = styled.div`
  display: flex;
  padding: 10px 10px 10px 20px;
  flex-direction: column;
  flex: 1;
`;

const ProfileInfoWrapper = styled.div`
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 16px -8px rgb(0 0 0 / 68%);
  webkit-box-shadow: 0px 0px 16px -8px rgb(0 0 0 / 68%);
`;

const ProfileInfoTitle = styled.h4`
  font-size: 18px;
  padding-bottom: 10px;
`;

const ProfileInfoItem = styled.div`
  display: flex;
  padding: 10px;
  gap: 5px;
`;

const ProfileInfoKey = styled.span`
  font-weight: 500;
`;

const ProfileInfoValue = styled.span``;

const ProfileFollowings = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProfileFollowing = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
`;

const ProfileFollowingImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
`;

const ProfileFollowingName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

function ProfileInfo() {
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
    <ProfileInfoContainer>
      <ProfileInfoWrapper>
        <ProfileInfoTitle>Intro</ProfileInfoTitle>
        <ProfileInfoItem>
          <ProfileInfoKey>From:</ProfileInfoKey>
          <ProfileInfoValue>{user.from}</ProfileInfoValue>
        </ProfileInfoItem>

        <ProfileInfoItem>
          <ProfileInfoKey>Lives in:</ProfileInfoKey>
          <ProfileInfoValue>{user.city}</ProfileInfoValue>
        </ProfileInfoItem>

        <ProfileInfoItem>
          <ProfileInfoKey>Relationship:</ProfileInfoKey>
          <ProfileInfoValue>
            {user.relationship === 1
              ? "Single"
              : user.relationship === 2
              ? "Married"
              : "-"}
          </ProfileInfoValue>
        </ProfileInfoItem>
      </ProfileInfoWrapper>

      <ProfileInfoWrapper>
        <ProfileInfoTitle>Friends</ProfileInfoTitle>
        <ProfileFollowings>
          {listFriend.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              style={{
                textDecoration: "none",
                color: "#2f3542",
                textAlign: "center",
              }}
            >
              <ProfileFollowing key={friend._id}>
                <ProfileFollowingImg src={friend.profileImg} alt="" />
                <ProfileFollowingName>{friend.username}</ProfileFollowingName>
              </ProfileFollowing>
            </Link>
          ))}
        </ProfileFollowings>
      </ProfileInfoWrapper>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
