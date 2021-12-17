import {
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actions/types";


const initialState = { profile: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        profile: payload.profile,
      };
    case LOGOUT:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}