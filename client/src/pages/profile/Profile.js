import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Feed from "../../components/Feed";
import Navbar from "../../components/Navbar";
import ProfileInfo from "../../components/ProfileInfo";
import RightBar from "../../components/RightBar";
import SideBar from "../../components/SideBar";
import { StateContext } from "../../context/contextProvider";

const ProfileContainer = styled.div`
  display: flex;
  padding: 0px 10px;
  margin-top: 20px;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  padding: 10px 20px;
`;

const ProfileTop = styled.div``;

const ProfileCover = styled.div`
  height: 565px;
  position: relative;
`;

const ProfileCoverImg = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  bottom: 0px;
  left: 23px;
  border: 3px solid #fff;
`;

const ProfileTitle = styled.div`
  position: absolute;
  left: 225px;
  bottom: 25px;
`;

const ButtonFollow = styled.button`
  padding: 10px 20px;
  position: absolute;
  right: 50px;
  bottom: 35px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: 0.5px solid #2ed573;
  color: #2ed573;
  background-color: #fff;

  &:hover {
    background-color: #2ed573;
    color: #fff;
  }
`;

const ProfileName = styled.h4`
  font-size: 30px;
  margin: 10px;
`;

const ProfileDesc = styled.span`
  font-size: 18px;
`;

const ProfileBottom = styled.div`
  display: flex;
  flex: 1;
  padding: 10px 0px;
`;

function Profile({ user }) {
  const [followed, setFollowed] = useState(false);

  const {
    state: { user: currentUser, dispatch },
  } = useContext(StateContext);
  console.log(currentUser);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(
          `http://localhost:5000/api/v1/user/${user._id}/unfollow`,
          { userId: currentUser._id }
        );
        dispatch({
          type: "UN_FOLLOW",
          payload: user._id,
        });
      } else {
        await axios.put(
          `http://localhost:5000/api/v1/user/${user._id}/follow`,
          { userId: currentUser._id }
        );
        dispatch({
          type: "FOLLOW",
          payload: user._id,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  return (
    <>
      <Navbar />
      <ProfileContainer>
        <SideBar />
        <ProfileWrapper>
          <ProfileTop>
            <ProfileCover>
              <ProfileCoverImg src={user.coverImg} alt="coverImg" />
              <ProfileImg src={user.profileImg} alt="userImg" />
              <ProfileTitle>
                <ProfileName>{user.username}</ProfileName>
                <ProfileDesc>{user.desc}</ProfileDesc>
              </ProfileTitle>
              {user.username !== currentUser.username && (
                <ButtonFollow onClick={handleClick}>
                  {followed ? "UnFollow" : "Follow"}
                </ButtonFollow>
              )}
            </ProfileCover>
          </ProfileTop>
          <ProfileBottom>
            <ProfileInfo />
            <Feed />
          </ProfileBottom>
        </ProfileWrapper>
        <RightBar />
      </ProfileContainer>
    </>
  );
}

export default Profile;
