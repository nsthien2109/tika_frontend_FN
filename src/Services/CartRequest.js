import axios from "axios";
import Cart_Slice from "../Redux/Slice/Cart_Slice";
const server = "http://localhost:8000/api";

export const getCart = async (dispatch, token) => {
  dispatch(Cart_Slice.actions.getAllCartStart("Loading, please wait..."));
  try {
    const response = await axios.get(`${server}/cart`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Cart_Slice.actions.getAllCartSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Cart_Slice.actions.getAllCartFailure(error));
  }
};

export const addCart = async (cartData, dispatch, token) => {
  dispatch(Cart_Slice.actions.addCartStart("Loading, please wait..."));
  try {
    const response = await axios.post(`${server}/cart`, cartData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Cart_Slice.actions.addCartSuccess());
    await getCart(dispatch, token);
  } catch (error) {
    console.log(error.response);
    dispatch(Cart_Slice.actions.addCartFailure(error));
  }
};

export const removeCart = async (id_cart, dispatch, token) => {
  dispatch(Cart_Slice.actions.deleteCartStart("Loading, please wait..."));
  console.log(id_cart);
  try {
    const response = await axios.delete(`${server}/remove-cart/${id_cart}`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Cart_Slice.actions.deleteCartSuccess(id_cart));
  } catch (error) {
    console.log(error.response);
    dispatch(Cart_Slice.actions.deleteCartFailure(error));
  }
};

export const checkCoupon = async (couponData, dispatch, token) => {
  dispatch(Cart_Slice.actions.checkCouponStart("Loading, please wait..."));
  try {
    const response = await axios.post(`${server}/check-coupon`, couponData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Cart_Slice.actions.checkCouponSuccess(response.data));
  } catch (error) {
    dispatch(
      Cart_Slice.actions.checkCouponFailure(error.response.data.message)
    );
  }
};
