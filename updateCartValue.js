const cartValue=document.querySelector("#cartValue");
export const updatecartValue=(cartsProducts)=>{
    return cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping">${cartsProducts.length}</i>`
};