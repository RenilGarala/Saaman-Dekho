import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updatecartValue } from "./updateCartValue";

export const removeProdFromCart=(id)=>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd)=>curProd.id!==id);

    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    // to remove div onclick 
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast("delete",id);
        updateCartProductTotal();

    }
    updatecartValue(cartProducts);
    

};