export const actionType = {};

const reducer = (state, action) => {
  const {
    type,
    payload: { isAuthenticated, user },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user,
      };

    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };

    case "UN_FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.following.filter(
            (following) => following !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
export default reducer;
