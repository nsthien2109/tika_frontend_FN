import axios from "axios";
import SubCategory_Slice from "../Redux/Slice/SubCategory_Slice";
const server = "http://localhost:8000/api";

export const getSubCategories = async (dispatch) => {
  dispatch(
    SubCategory_Slice.actions.getAllSubCategoriesStart(
      "Loading, please wait..."
    )
  );
  try {
    const response = await axios.get(`${server}/sub_categories`);
    dispatch(
      SubCategory_Slice.actions.getAllSubCategoriesSuccess(response.data)
    );
  } catch (error) {
    console.log(error.message);
    dispatch(SubCategory_Slice.actions.getAllSubCategoriesFailure(error));
  }
};
