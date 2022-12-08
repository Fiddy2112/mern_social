import axios from "axios";
import { createContext, useReducer, useEffect } from "react";
import { apiURL, LOCAL_STORAGE_TOKEN } from "./constants";
import setAuthToken from "../utils/setAuthToken";
import reducer from "./reducer";

const initialState = {
  authLoading: true,
  isAuthenticated: false,
  user: null,
};

export const StateContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //authenticate user
  const loadingUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN]);
    }

    try {
      const response = await axios.get(`${apiURL}/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
    } catch (e) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN);
      setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: { authLoading: false, isAuthenticated: false, user: null },
      });
    }
  };

  useEffect(() => {
    loadingUser();
  }, []);

  //login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiURL}/auth/login`, userForm);

      if (response.data.success) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN, response.data.accessToken);
      }

      await loadingUser();

      return response.data;
    } catch (err) {
      if (err.response.data) {
        return err.response.data;
      } else {
        return {
          success: false,
          message: err.message,
        };
      }
    }
  };

  const authContextData = {
    loginUser,
    state,
  };

  return (
    <StateContext.Provider value={authContextData}>
      {children}
    </StateContext.Provider>
  );
};
