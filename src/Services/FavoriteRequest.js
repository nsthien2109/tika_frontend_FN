import axios from "axios";
import Favorite_Slice from "../Redux/Slice/Favorite_Slice";
const server = "http://localhost:8000/api";

export const addFavorite = async (favoriteData, dispatch, token) => {
  dispatch(Favorite_Slice.actions.addFavoriteStart("Loading, please wait..."));
  try {
    const response = await axios.post(`${server}/favorite`, favoriteData, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    dispatch(Favorite_Slice.actions.addFavoriteSuccess(response.data?.data));
  } catch (error) {
    console.log(error.response);
    dispatch(Favorite_Slice.actions.addFavoriteFailure(error));
  }
};

export const unFavorite = async (id_favorite, dispatch, token) => {
  dispatch(
    Favorite_Slice.actions.deleteFavoriteStart("Loading, please wait...")
  );
  console.log(id_favorite);
  try {
    const response = await axios.delete(`${server}/favorite/${id_favorite}`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Favorite_Slice.actions.deleteFavoriteSuccess(id_favorite));
  } catch (error) {
    console.log(error.response);
    dispatch(Favorite_Slice.actions.deleteFavoriteFailure(error));
  }
};

export const getFavorites = async (id_user, dispatch, token) => {
  dispatch(
    Favorite_Slice.actions.getAllFavoriteStart("Loading, please wait...")
  );
  try {
    const response = await axios.get(`${server}/favorite/${id_user}`, {
      "Content-Type": "multipart/form-data",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(Favorite_Slice.actions.getAllFavoriteSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(Favorite_Slice.actions.getAllFavoriteFailure(error));
  }
};
