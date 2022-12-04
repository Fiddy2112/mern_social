import React from "react";
import styled from "styled-components";
import Feed from "../../components/Feed";
import Navbar from "../../components/Navbar";
import ProfileInfo from "../../components/ProfileInfo";
import RightBar from "../../components/RightBar";
import SideBar from "../../components/SideBar";

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

function Profile() {
  return (
    <>
      <Navbar />
      <ProfileContainer>
        <SideBar />
        <ProfileWrapper>
          <ProfileTop>
            <ProfileCover>
              <ProfileCoverImg src="assets/post/post5.jpeg" alt="coverImg" />
              <ProfileImg src="assets/person/person5.jpg" alt="userImg" />
              <ProfileTitle>
                <ProfileName>Vincenzo</ProfileName>
                <ProfileDesc>Welcome to my profile</ProfileDesc>
              </ProfileTitle>
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
