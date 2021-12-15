import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const authState = { isAuthenticated: false, userId: null };
const cartState = { cartItems: [], qty: 0 };

const authSlice = createSlice({
  name: "authentication",
  initialState: authState,
  reducers: {
    login(state, action) {
      if (Cookies.get("token") != null) {
        state.isAuthenticated = true;
        state.userId = Cookies.get("userId");
      } else {
        axios
          .post("http://localhost:8080/auth/login", action.payload)
          .then((response) => {
            //Cookies.set("token", response.data.token);
            //Cookies.set("userId", response.data.id);

            state.isAuthenticated = true;
            state.userId = response.data.id;

            axios.defaults.headers.common = {
              Authorization: "Bearer " + response.data.token,
            };
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },

    logout(state) {
      Cookies.remove("user");
      axios.defaults.headers.common = {
        Authorization: "",
      };
      state.isAuthenticated = false;
      state.userId = null;
    },

    getUserId(state) {
      return state.userId;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    add(state, action) {
      cartState.qty++;
      cartState.cartItems.add(action.payload);
    },
    remove(state, action) {
      cartState.qty--;
      cartState.cartItems.reduce(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const storeActions = {
  auth: authSlice.actions,
  cart: cartSlice.actions,
};

export default store;
