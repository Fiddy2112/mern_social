import React from "react";
import styled from "styled-components";

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
  return (
    <ProfileInfoContainer>
      <ProfileInfoWrapper>
        <ProfileInfoTitle>Intro</ProfileInfoTitle>
        <ProfileInfoItem>
          <ProfileInfoKey>From:</ProfileInfoKey>
          <ProfileInfoValue>NY</ProfileInfoValue>
        </ProfileInfoItem>

        <ProfileInfoItem>
          <ProfileInfoKey>Lives in:</ProfileInfoKey>
          <ProfileInfoValue>ASyyd</ProfileInfoValue>
        </ProfileInfoItem>

        <ProfileInfoItem>
          <ProfileInfoKey>Relationship:</ProfileInfoKey>
          <ProfileInfoValue>Single</ProfileInfoValue>
        </ProfileInfoItem>
      </ProfileInfoWrapper>

      <ProfileInfoWrapper>
        <ProfileInfoTitle>Friends</ProfileInfoTitle>
        <ProfileFollowings>
          <ProfileFollowing>
            <ProfileFollowingImg src="assets/person/person6.jpeg" alt="" />
            <ProfileFollowingName>John Carter</ProfileFollowingName>
          </ProfileFollowing>

          <ProfileFollowing>
            <ProfileFollowingImg src="assets/person/person6.jpeg" alt="" />
            <ProfileFollowingName>John Carter</ProfileFollowingName>
          </ProfileFollowing>

          <ProfileFollowing>
            <ProfileFollowingImg src="assets/person/person6.jpeg" alt="" />
            <ProfileFollowingName>John Carter</ProfileFollowingName>
          </ProfileFollowing>

          <ProfileFollowing>
            <ProfileFollowingImg src="assets/person/person6.jpeg" alt="" />
            <ProfileFollowingName>John Carter</ProfileFollowingName>
          </ProfileFollowing>
        </ProfileFollowings>
      </ProfileInfoWrapper>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
