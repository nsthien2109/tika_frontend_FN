import axios from "axios";
import Product_Slice from "../Redux/Slice/Product_Slice";
const server = "http://localhost:8000/api";

export const getProducts = async (dispatch) => {
  dispatch(Product_Slice.actions.getAllProductStart("Loading products ..."));
  try {
    const response = await axios.get(`${server}/products`);
    dispatch(Product_Slice.actions.getAllProductSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Product_Slice.actions.getAllProductFailure(error));
  }
};
