import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { StateContext } from "./context/contextProvider";
import { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  margin: auto;
  border: 20px solid #eaf0f6;
  border-radius: 50%;
  border-top: 20px solid #ff6b81;
  width: 200px;
  height: 200px;
  animation: spinner 2s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const {
    state: { authLoading, isAuthenticated, user },
  } = useContext(StateContext);

  if (authLoading) {
    return (
      <Container>
        <Loader></Loader>
      </Container>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/profile/:username"
          element={
            isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
