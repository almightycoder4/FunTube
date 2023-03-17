import * as types from "./actionTypes";
const loginData = {
  token: "",
  data: "",
  isLoading: false,
  isError: false,
};
const reducer = (state = loginData, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        token: "",
        data: "",
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: "",
        data: payload,
        isLoading: false,
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        token: "",
        data: "",
        isLoading: false,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export { reducer };
