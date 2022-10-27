import axios from "axios";
import Store_Slice from "../Redux/Slice/Store_Slice";
const server = "http://localhost:8000/api";

export const getStores = async (dispatch) => {
  dispatch(Store_Slice.actions.getAllStoreStart());
  try {
    const response = await axios.get(`${server}/stores`);
    dispatch(Store_Slice.actions.getAllStoreSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Store_Slice.actions.getAllStoreFailure(error));
  }
};
