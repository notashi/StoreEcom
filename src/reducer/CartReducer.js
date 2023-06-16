const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
      // console.log(
      //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
      //   product
      // );
  
      let cartProduct;
  
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };
      
    }
    if (action.type === "CLEAR_CART") {
      return {
        ...state,
        cart: [],
      };
    }
    if(action.type==="ADD_ITEM_CART"){
   let updatedItem = state.cart.reduce((accum,curElm)=>{ let {amount} =curElm;
   accum=accum + amount;
   return accum;

   },0)
   return {...state,
    total_item:updatedItem}
    }

    
    if (action.type==="DECRE"){
      let updatedValue = state.cart.map((curElm)=>{
        if(curElm.id === action.payload){
         // console.log("match")
         let decAmount = curElm.amount-1
         return{
          ...curElm,
          amount:decAmount
         }
        }else{
          return curElm
        }
      })
      return {...state,cart:updatedValue}
    }
  
if (action.type==="INCRE"){
  let updatedValue=state.cart.map((curElm)=>{
    if(curElm.id===action.payload){
      let incAmount =curElm.amount+1
      return{
        ...curElm,
        amount:incAmount
      }
    }else{
      return curElm
    }
  })
  return{...state,cart:updatedValue}
}


    return state;
  };
  
  export default cartReducer;