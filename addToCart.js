import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updatecartValue } from "./updateCartValue";
getCartProductFromLS();

export const addToCart= (event,id,stock)=>{

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);

    let quantity=currentProdElem.querySelector(".productQuantity").innerText;
    let price= currentProdElem.querySelector(".productPrice").innerText;
    console.log(quantity,price);
    
    price=price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((curprod)=>curprod.id===id);

    if(existingProd && quantity>1){
        quantity=Number(existingProd.quantity)+Number(quantity);
        price=Number(price*quantity);
        let updatedCart={id,quantity,price};

        updatedCart = arrLocalStorageProduct.map((curprod)=>{
            return (curprod.id===id)? updatedCart : curprod;
        });
        console.log(updatedCart);
        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
    }

    if(existingProd){
        return false;
    }

    price=Number(price*quantity);
    quantity=Number(quantity);
    
    arrLocalStorageProduct.push({id,quantity,price});

    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));

    updatecartValue(arrLocalStorageProduct);
    showToast("add",id);
}