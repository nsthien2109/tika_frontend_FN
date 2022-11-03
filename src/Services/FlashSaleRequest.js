import axios from "axios";
import FlashSale_Slice from "../Redux/Slice/FlashSale_Slice";
const server = "http://localhost:8000/api";

export const getFlashSale = async (dispatch) => {
  dispatch(FlashSale_Slice.actions.getFlashSaleStart("Loading products ..."));
  try {
    const response = await axios.get(`${server}/flashsale`);
    dispatch(FlashSale_Slice.actions.getFlashSaleSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(FlashSale_Slice.actions.getFlashSaleFailure(error));
  }
};
