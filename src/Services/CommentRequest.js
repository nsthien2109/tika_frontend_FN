import axios from "axios";
import Comment_Slice from "../Redux/Slice/Comment_Slice";
const server = "http://localhost:8000/api";

export const addComment = async (commentData, dispatch, token) => {
  dispatch(Comment_Slice.actions.addCommentStart("Loading, please wait..."));
  try {
    const response = await axios.post(`${server}/comment`, commentData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Comment_Slice.actions.addCommentSuccess(response.data?.data));
  } catch (error) {
    dispatch(
      Comment_Slice.actions.addCommentFailure(error.response.data.message)
    );
  }
};

export const getComments = async (id_product, dispatch) => {
  dispatch(Comment_Slice.actions.getAllCommentStart("Loading, please wait..."));
  try {
    const response = await axios.get(`${server}/comments/${id_product}`);
    dispatch(Comment_Slice.actions.getAllCommentSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(
      Comment_Slice.actions.getAllCommentFailure(error.response.data.message)
    );
  }
};
