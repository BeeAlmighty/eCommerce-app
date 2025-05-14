import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const baseUrl = 'https://api.escuelajs.co/api/v1/products';

export const ACTIONS = {
  FETCH_DATA: 'fetch data',
  FETCH_CATEGORIES_DATA: 'fetch categories data',
  DATA_LOADING: 'loading',
  DATA_LOADED: 'loaded',
  ERROR_MESSAGE: 'error',
  TOGGLE_DARK_MODE: 'toggle dark mode',
  TOGGLE_NAVBAR: 'toggle navbar',
  CLOSE_NAVBAR: 'close navbar',
  CART_TOTAL_QUANTITY: 'cart total quantity',
  SHOW_MORE_CART_ITEMS: 'show more',
  INCREMENT_PRODUCT_QTY: 'increment',
  DECREMENT_PRODUCT_QTY: 'decrement',
  ADD_CART_ITEMLIST: 'add cart items',
  DELETE_CART_ITEM: 'delete cart item',
  SELECTED_IMAGE: 'change product image',
}

const appReducer = (state, action) => {
  switch(action.type){
    case ACTIONS.FETCH_DATA: {
      return {...state, data: action.data}
    }
    case ACTIONS.FETCH_CATEGORIES_DATA: {
      return {...state, categoriesData: action.data}
    }
    case ACTIONS.DATA_LOADING: {
      return {...state, isLoading: true}
    }
    case ACTIONS.DATA_LOADED: {
      return {...state, isLoading: false}
    }
    case ACTIONS.ERROR_MESSAGE: {
      return {...state, isLoading: false, errorMsg: action.payload}
    }
    case ACTIONS.TOGGLE_DARK_MODE: {
      return {...state, isDark: !state.isDark}
    }
    case ACTIONS.TOGGLE_NAVBAR: {
      return {...state, isNav: !state.isNav}
    }
    case ACTIONS.CLOSE_NAVBAR: {
      return {...state, isNav: false}
    }
    case ACTIONS.SHOW_MORE_CART_ITEMS: {
      return {...state, visibleProductCount: action.payload}
    }
    case ACTIONS.CART_TOTAL_QUANTITY: {
      return {...state, cartTotalQuantity: state.cartTotalQuantity + action.payload}
    }
    case ACTIONS.INCREMENT_PRODUCT_QTY: {
      return {...state, cartTotalQuantity: state.cartTotalQuantity + 1, cartItemsList: state.cartItemsList.map(cartItems => {
        if(cartItems.id == action.id){
          return {...cartItems, quantity: cartItems.quantity + 1};
        } else {
          return cartItems;
        }
      })}
    }
    case ACTIONS.DECREMENT_PRODUCT_QTY: {
      return {...state, cartTotalQuantity: state.cartTotalQuantity - 1, cartItemsList: state.cartItemsList.map(cartItems => {
        if(cartItems.id == action.id){
          return {...cartItems, quantity: cartItems.quantity - 1};
        } else {
          return cartItems;
        }
      })}
    }
    case ACTIONS.DELETE_CART_ITEM: {
      return {...state, cartTotalQuantity: state.cartTotalQuantity - action.payload, cartItemsList: state.cartItemsList.filter(cartItemList => cartItemList.id != action.id)}
    }
    case ACTIONS.ADD_CART_ITEMLIST: {
      const existingcartItem = state.cartItemsList.find(cartItem => cartItem.id == action.id);
      if(existingcartItem){
        return {...state, cartTotalQuantity: state.cartTotalQuantity + 1, cartItemsList: state.cartItemsList.map(cartItems => {
          if(cartItems.id == action.id){
            return {...cartItems, quantity: cartItems.quantity + 1};
          } else {
            return cartItems;
          }
        })}
      } else {
        return {...state, cartTotalQuantity: state.cartTotalQuantity + 1, cartItemsList: [...state.cartItemsList, {...action.payload, quantity: 1}]}
      }
    }
    case ACTIONS.SELECTED_IMAGE: {
      return {...state, selectedImage: action.payload}
    }
    default: {
      return state;
    }
  }
}

export const AppContext = createContext(null);
const initialState = {
  categoriesData: null,
  data: '',
  isLoading: false,
  errorMsg: '',
  isDark: false,
  isNav: false,
  visibleProductCount: 12,
  cartTotalQuantity: 0,
  cartItemsList : [],
  selectedImage: 0,
}
export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    const getData = async () => {
      dispatch({type: ACTIONS.DATA_LOADING})
      try {
        const response = await axios.get(baseUrl);
        dispatch({ type: ACTIONS.FETCH_DATA, data: response.data })
        dispatch({ type: ACTIONS.DATA_LOADED })
      } catch(error) {
        dispatch({ type: ACTIONS.ERROR_MESSAGE, payload: error.message })
      }
    }
    getData()
  },[])
  
  return (
    <AppContext.Provider value={{ state, dispatch }} >
      { children }
    </AppContext.Provider>
  )
}