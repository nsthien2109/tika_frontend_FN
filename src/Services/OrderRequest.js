import axios from "axios";
import Order_Slice from "../Redux/Slice/Order_Slice";
import Cart_Slice from "../Redux/Slice/Cart_Slice";
const server = "http://localhost:8000/api";

export const addOrder = async (orderData, dispatch, token, navigate) => {
  dispatch(Order_Slice.actions.onOrderStart("Loading, please wait..."));
  try {
    const response = await axios.post(`${server}/order`, orderData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Order_Slice.actions.onOrderSuccess(response.data));
    dispatch(Cart_Slice.actions.resetState());
    navigate(`/success`);
  } catch (error) {
    console.log(error.response);
    dispatch(Order_Slice.actions.onOrderFailure(error));
  }
};

export const getAllOrder = async (dispatch, token) => {
  dispatch(Order_Slice.actions.getAllOrderStart("Loading, please wait..."));
  try {
    const response = await axios.get(`${server}/order`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Order_Slice.actions.getAllOrderSuccess(response.data));
  } catch (error) {
    dispatch(
      Order_Slice.actions.getAllOrderFailure(error.response.data.message)
    );
  }
};

export const getDetailOrder = () => {};
