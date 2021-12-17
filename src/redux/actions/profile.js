import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
} from "./types";
import AuthService from "../../services/auth.service";

export const getProfile = () => (dispatch) => {
  return AuthService.profile().then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload:  {profile: data},
      });

      return Promise.resolve(data);
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};