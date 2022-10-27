import axios from "axios";
import Auth_Slice from "../Redux/Slice/Auth_Slice";
const server = "http://localhost:8000/api";

export const register = async (userData, dispatch) => {
  dispatch(Auth_Slice.actions.registerStart());
  try {
    const response = await axios.post(`${server}/register`, userData);
    dispatch(
      Auth_Slice.actions.registerSuccess(
        "Register Succsess , select login tab to login"
      )
    );
  } catch (error) {
    console.log(error);
    dispatch(Auth_Slice.actions.registerFailure(error.response.data.message));
  }
};

export const login = async (userData, dispatch, navigate) => {
  dispatch(Auth_Slice.actions.loginStart("Loading , please wait..."));
  try {
    const response = await axios.post(`${server}/login`, userData);
    dispatch(Auth_Slice.actions.loginSuccess(response.data));
    navigate("/");
  } catch (error) {
    dispatch(Auth_Slice.actions.loginFailure(error.response.data.message));
  }
};
