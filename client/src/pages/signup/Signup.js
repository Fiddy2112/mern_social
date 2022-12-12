import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StateContext } from "../../context/contextProvider";

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

const SignupForm = styled.form`
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

const LoginButton = styled.a`
  width: 60%;
  display: flex;
  align-self: center;
  height: 50px;
  border-radius: 5px;
  border: 0.5px solid #2ed573;
  background-color: #fff;
  color: #2ed573;
  font-size: 20px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-color: #2ed573;
  }
`;

const ErrorText = styled.span`
  font-size: 25px;
  color: #ff4757;
  font-weight: 500;
`;

function Signup() {
  //local state
  const [error, setError] = useState("");
  const [inputForm, setInputForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputForm;

  //router
  const navigate = useNavigate();

  //context
  const { signupUser } = useContext(StateContext);

  const onChangeRegisterForm = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerData = await signupUser(inputForm);
      if (registerData.success === false) {
        setError(registerData.message);
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SignupContainer>
      <SignupWrapper>
        <SignupLeft>
          <SignupForm onSubmit={handleSubmit}>
            <SignupInput
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={onChangeRegisterForm}
            />
            <SignupInput
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              onChange={onChangeRegisterForm}
            />
            <SignupInput
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={onChangeRegisterForm}
            />
            <SignupButton>Log in</SignupButton>
            <LoginButton href="/login">Your have account</LoginButton>
          </SignupForm>
        </SignupLeft>
        <SignupRight>
          <SignupLogo>signup</SignupLogo>
          <SignupDesc>It's quick and easy.</SignupDesc>
          <ErrorText>{error}</ErrorText>
        </SignupRight>
      </SignupWrapper>
    </SignupContainer>
  );
}

export default Signup;
