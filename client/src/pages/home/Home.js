import React from "react";
import styled from "styled-components";
import Feed from "../../components/Feed";
import Navbar from "../../components/Navbar";
import RightBar from "../../components/RightBar";
import SideBar from "../../components/SideBar";

const HomeContainer = styled.div`
  display: flex;
  padding: 0px 10px;
  margin-top: 20px;
  width: 100%;
`;

function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer>
        <SideBar />
        <Feed />
        <RightBar />
      </HomeContainer>
    </>
  );
}

export default Home;
