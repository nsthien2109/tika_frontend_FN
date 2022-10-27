import axios from "axios";
import Category_Slice from "../Redux/Slice/Category_Slice";
const server = "http://localhost:8000/api";

export const getCategories = async (dispatch) => {
  dispatch(Category_Slice.actions.getAllCategoriesStart());
  try {
    const response = await axios.get(`${server}/categories`);
    dispatch(Category_Slice.actions.getAllCategoriesSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Category_Slice.actions.getAllCategoriesFailure(error));
  }
};
