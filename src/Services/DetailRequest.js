import axios from "axios";
import Detail_Slice from "../Redux/Slice/Detail_Slice";
const server = "http://localhost:8000/api";

export const getDetailProduct = async (productId, dispatch) => {
  dispatch(Detail_Slice.actions.getProductStart("Loading products ..."));
  try {
    const response = await axios.get(`${server}/product/${productId}`);
    dispatch(Detail_Slice.actions.getProductSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Detail_Slice.actions.getProductFailure(error));
  }
};

export const getImagesProduct = async (productId, dispatch) => {
  dispatch(Detail_Slice.actions.getImageStart("Loading products ..."));
  try {
    const response = await axios.get(`${server}/images/${productId}`);
    dispatch(Detail_Slice.actions.getImageSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Detail_Slice.actions.getImageFailure(error));
  }
};
