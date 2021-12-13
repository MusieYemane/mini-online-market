import {createStore} from 'redux';
const counterReducer = (state = {products:[],cartItems:[], qty:0}, action ) => { 
  if (action.type === 'onAdd'){
    return { 
      qty : state.cartItems.qty + 1,
      product:state.products,
      } }
  if (action.type === 'onRemove'){
    return { 
      qty : state.cartItems.qty + 1,
      product:state.products
    };
  }
  return state;
  }
  const store = createStore(counterReducer);
  export default store;


  //***** */ We can change the state of the store from any component using useDispatch
  // import { useSelector, useDispatch } from 'react-redux';
  // const dispatch = useDispatch();
  // const incrementHandler = () => { dispatch({ type : 'increment'});}
  // const decrementHandler = () => {dispatch({ type : 'decrement'});}

  //******** */ We can access the vlaue of the store using useSelector
  //const counter = useSelector(state => state.qty);