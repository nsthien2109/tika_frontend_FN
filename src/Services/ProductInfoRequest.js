import axios from "axios";
import ProductInfo_Slice from "../Redux/Slice/ProductInfo_Slice";
const server = "http://localhost:8000/api";

export const getProductInfo = async (id_product, dispatch) => {
  dispatch(
    ProductInfo_Slice.actions.getProductInfoStart("Loading , please wait...")
  );
  try {
    const response = await axios.get(`${server}/release/${id_product}`);
    dispatch(ProductInfo_Slice.actions.getProductInfoSucess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(ProductInfo_Slice.actions.getProductInfoFailure(error));
  }
};
