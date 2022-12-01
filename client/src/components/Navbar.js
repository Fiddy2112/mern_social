import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const NavContainer = styled.div`
  height: 60px;
  width: 100%;

  background-color: #fff;
  position: sticky;
  top: 0;
`;

const NavWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavTop = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: #ff6b81;
`;
const NavCenter = styled.div`
  flex: 1;
`;

const NavSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 5px;
  border: 0.5px solid #a4b0be;
  max-width: 350px;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #747d8c;
  font-size: 20px;
  &:hover {
    color: #ff6b81;
  }
`;
const NavRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const NavIcon = styled.div`
  position: relative;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  color: #57606f;
  font-size: 20px;
  &:hover {
    color: #ff6b81;
  }
`;

const NavIconBadge = styled.span`
  position: absolute;
  top: -5px;
  left: 12px;
  width: 15px;
  height: 15px;
  background-color: #ff4757;
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 50%;
`;
const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

function Navbar() {
  return (
    <NavContainer>
      <NavWrapper>
        <NavTop>
          <Logo>Social App</Logo>
        </NavTop>
        <NavCenter>
          <NavSearchContainer>
            <Icon>
              <SearchOutlinedIcon />
            </Icon>
            <Input placeholder="Search for friend, post & video" />
          </NavSearchContainer>
        </NavCenter>
        <NavRight>
          <NavIcons>
            <NavIcon>
              <Icons>
                <ChatBubbleOutlineOutlinedIcon />
              </Icons>
              <NavIconBadge>1</NavIconBadge>
            </NavIcon>

            <NavIcon>
              <Icons>
                <NotificationsNoneOutlinedIcon />
              </Icons>
              <NavIconBadge>1</NavIconBadge>
            </NavIcon>
          </NavIcons>
          <UserImg src="../assets/person/person1.jpeg" alt="" />
        </NavRight>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
