import { updatecartValue } from "./updateCartValue";

export const getCartProductFromLS= ()=>{
    let cartProducts=localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return [];
    }
    cartProducts=JSON.parse(cartProducts);
    //update the cart button value
    updatecartValue(cartProducts);
    return cartProducts;
};