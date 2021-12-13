import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

// Authentication
const initialAuthState = { isAuthenticated: false, userId: null };

const authSlice = createSlice(
  {
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
      login(state, action) {
        const userCred = action.payload;

        if (Cookies.get('token') != null) {
          state.isAuthenticated = true
          // state.userId = Cookies.get('user.id')
        }
        else {
          axios.post('http://localhost:8080/auth/login', userCred)
            .then(response => {
              Cookies.set('token', response.data.token);
              state.isAuthenticated = true;
              state.userId = response.data.id;

              console.log("response user Id", response.data.id);
              debugger;
              window.localStorage.setItem('userId', response.data.id);
              console.log("localstorage", window.localStorage.getItem('userId'));


              axios.defaults.headers.common = {
                'Authorization': 'Bearer ' + response.data.token
              };

              //rout
            })
            .catch(err => console.log(err.message))
        }


      },
      logout(state) {
        Cookies.remove('user')
        axios.defaults.headers.common = {
          'Authorization': ''
        };
        state.isAuthenticated = false;
        state.userId = null;
      },

      getUserId(state) {
        return state.userId;
      }

    }

  }
);

const authentication = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});


// cart
const counterReducer = (state = { products: [], cartItems: [], qty: 0 }, action) => {
  if (action.type === 'onAdd') {
    return {
      qty: state.cartItems.qty + 1,
      product: state.products,
    }
  }
  if (action.type === 'onRemove') {
    return {
      qty: state.cartItems.qty + 1,
      product: state.products
    };
  }
  return state;
}
const cart = createStore(counterReducer);

// export auth & cart
const store = { authentication, cart };
export default store;


  //***** */ We can change the state of the store from any component using useDispatch
  // import { useSelector, useDispatch } from 'react-redux';
  // const dispatch = useDispatch();
  // const incrementHandler = () => { dispatch({ type : 'increment'});}
  // const decrementHandler = () => {dispatch({ type : 'decrement'});}

  //******** */ We can access the vlaue of the store using useSelector
  //const counter = useSelector(state => state.qty);