import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=vladilin";

export const fetchPosts = (payload) => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
};

export const createPost = (payload) => {
  const request = axios.post(`${ROOT_URL}/posts/${API_KEY}`, payload);

  return { type: CREATE_POST, payload: request };
};
