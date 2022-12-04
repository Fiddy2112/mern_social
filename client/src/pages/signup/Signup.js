import React from "react";
import styled from "styled-components";

const SignupContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

const SignupLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const SignupLogo = styled.h3`
  font-size: 40px;
  font-weight: 600;
  color: #ff6b81;
`;

const SignupDesc = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const SignupRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-left: 50px;
`;

const SignupForm = styled.div`
  height: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

const SignupInput = styled.input`
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: 0.5px solid gray;
  font-size: 16px;
  margin-bottom: 20px;
`;

const SignupButton = styled.button`
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: 0.5px solid #ff6b81;
  color: #ff6b81;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

  &:hover {
    color: #fff;
    background-color: #ff6b81;
  }
`;

// const SignupForgotten = styled.span`
//   text-align: center;
//   padding: 10px;
// `;

const LoginButton = styled.button`
  width: 60%;
  align-self: center;
  height: 50px;
  border-radius: 5px;
  border: 0.5px solid #2ed573;
  background-color: #fff;
  color: #2ed573;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #2ed573;
  }
`;

function Signup() {
  return (
    <SignupContainer>
      <SignupWrapper>
        <SignupLeft>
          <SignupForm>
            <SignupInput placeholder="Username" />
            <SignupInput placeholder="Email" />
            <SignupInput placeholder="Password" />
            <SignupButton>Log in</SignupButton>
            <LoginButton>Do you have account</LoginButton>
          </SignupForm>
        </SignupLeft>
        <SignupRight>
          <SignupLogo>Sign up</SignupLogo>
          <SignupDesc>It's quick and easy.</SignupDesc>
        </SignupRight>
      </SignupWrapper>
    </SignupContainer>
  );
}

export default Signup;
