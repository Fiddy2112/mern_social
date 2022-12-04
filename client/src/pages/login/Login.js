import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
`;

const LoginLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const LoginLogo = styled.h3`
  font-size: 40px;
  font-weight: 600;
  color: #ff6b81;
`;

const LoginDesc = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const LoginRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const LoginForm = styled.div`
  height: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

const LoginInput = styled.input`
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: 0.5px solid gray;
  font-size: 16px;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: 0.5px solid #ff6b81;
  color: #ff6b81;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    color: #fff;
    background-color: #ff6b81;
  }
`;

const LoginForgotten = styled.span`
  text-align: center;
  padding: 10px;
`;

const RegisterButton = styled.button`
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

function Login() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginLeft>
          <LoginLogo>Social app</LoginLogo>
          <LoginDesc>
            Helps you connect and share with the people in your life.
          </LoginDesc>
        </LoginLeft>
        <LoginRight>
          <LoginForm>
            <LoginInput placeholder="Email" />
            <LoginInput placeholder="Password" />
            <LoginButton>Log in</LoginButton>
            <LoginForgotten>Don't you have account?</LoginForgotten>
            <RegisterButton>Create a new account</RegisterButton>
          </LoginForm>
        </LoginRight>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
