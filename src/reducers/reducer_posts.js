import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return _.mapKeys(payload.data, "id");
    case FETCH_POST:
      return { ...state, [payload.data.id]: payload.data };
    case DELETE_POST:
      return _.omit(state, payload);

    default:
      return state;
  }
};
