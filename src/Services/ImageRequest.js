import axios from "axios";
import Product_Slice from "../Redux/Slice/Product_Slice";
const server = "http://localhost:8000/api";

export const getImages = async (productId, dispatch) => {
  dispatch(Product_Slice.actions.getImageStart("Loading, please wait..."));
  try {
    const response = await axios.get(`${server}/images/${productId}`);
    dispatch(Product_Slice.actions.getImageSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Product_Slice.actions.getImageFailure(error));
  }
};
