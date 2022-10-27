import axios from "axios";
import Banner_Slice from "../Redux/Slice/Banner_Slice";
const server = "http://localhost:8000/api";

export const getBanners = async (dispatch) => {
  dispatch(Banner_Slice.actions.getAllBannerStart());
  try {
    const response = await axios.get(`${server}/banners`);
    dispatch(Banner_Slice.actions.getAllBannerSucess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Banner_Slice.actions.getAllBannerFailure(error));
  }
};
