import axios from "axios";
import Address_Slice from "../Redux/Slice/Address_Slice";
const server = "http://localhost:8000/api";

export const getAddress = async (dispatch, token) => {
  dispatch(Address_Slice.actions.getAddressStart("Loading, please wait..."));
  try {
    const response = await axios.get(`${server}/address`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Address_Slice.actions.getAddressSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Address_Slice.actions.getAddressFailure(error));
  }
};

export const updateAddress = async (addressData, dispatch, token) => {
  dispatch(Address_Slice.actions.updateAddressStart("Loading, please wait..."));
  try {
    const response = await axios.post(`${server}/address`, addressData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Address_Slice.actions.updateAddressSuccess(response.data));
  } catch (error) {
    console.log(error.response);
    dispatch(Address_Slice.actions.updateAddressFailure(error));
  }
};
