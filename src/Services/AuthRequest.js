import axios from "axios";
import Auth_Slice from "../Redux/Slice/Auth_Slice";
import Address_Slice from "../Redux/Slice/Address_Slice";
import Cart_Slice from "../Redux/Slice/Cart_Slice";
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

export const updateUser = async (userData, dispatch, token) => {
  dispatch(Auth_Slice.actions.updateStart("Loading , please wait..."));
  try {
    const response = await axios.post(`${server}/user-update`, userData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Auth_Slice.actions.updateSuccess(response.data));
  } catch (error) {
    dispatch(Auth_Slice.actions.updateFailure(error.response.data.message));
  }
};

export const logout = async (dispatch, token, navigate) => {
  dispatch(Auth_Slice.actions.logoutStart("Loading , please wait..."));
  try {
    const response = await axios.get(`${server}/logout`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Auth_Slice.actions.logoutSuccess(response.data.message));
    dispatch(Cart_Slice.actions.resetState());
    dispatch(Address_Slice.actions.resetState());
    navigate("/auth");
  } catch (error) {
    dispatch(Auth_Slice.actions.logoutFailure(error.response.data.message));
  }
};
