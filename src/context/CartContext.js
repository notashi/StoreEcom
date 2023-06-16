import { createContext, useContext,  useEffect,  useReducer } from "react";
import reducer from "../reducer/CartReducer"
//import { json } from "react-router-dom";

const CartContext = createContext();

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("Data Entered");
//   if (localCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// };

const getData=()=>{
  let newCartData =localStorage.getItem("DataStored")
  const parsedData = JSON.parse(newCartData);
  if(!Array.isArray(parsedData)) 
  return [];
  return parsedData;
}



const initialState = {
 // cart: [],
 cart:getData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const setDecrease =(id)=>{
    dispatch({type:"DECRE",payload:id});
  }
  const setIncrease =(id)=>{
    dispatch({type:"INCRE",payload:id});
  }

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    
  };

  // useEffect(()=>{

  //   dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

  //   localStorage.setItem("Data Entered",JSON.stringify(state.cart))
  // },[state.cart])
// increment and decrement products

useEffect(()=>{

  dispatch ({type:"ADD_ITEM_CART"})
  localStorage.setItem("DataStored",JSON.stringify(state.cart))
},[state.cart])


  // const setDecrease =(id)=>{
  //   dispatch({type:"DECRE",payload:id});
  // }
  // const setIncrease =(id)=>{
  //   dispatch({type:"INCRE",payload:id});
  // }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };


  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,setDecrease,setIncrease , clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };