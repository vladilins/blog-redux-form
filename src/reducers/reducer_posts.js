import _ from "lodash";
import { FETCH_POSTS } from "../actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return _.mapKeys(payload.data, "id");
    // return { ...state, ...payload };

    default:
      return state;
  }
};
