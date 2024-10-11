import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatcurrentcy } from "../utils/maney.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";
 
export function renderPaymentsummary(){

    let productpricesents = 0
    let quantity =0
    let shippinpriceCent =0
    let totalBeforTax =0;
    let tax = 0;
    cart.forEach(cartItem=> {
        
        const product = getProduct(cartItem.productId)
   productpricesents += product.priceCents * cartItem.Quantity
     quantity += cartItem.Quantity
     const deliveryOptions = getDeliveryOption(cartItem.deliveryOptionId)
       shippinpriceCent += deliveryOptions.priceCents
       tax += (10/100)*productpricesents;
    });

   document.querySelector('.totalCostOfItems').innerHTML = formatcurrentcy(productpricesents);
   document.querySelector('.items').innerHTML = quantity;
   document.querySelector('.shippingCost').innerHTML =formatcurrentcy(shippinpriceCent);
   document.querySelector('.totalBeforTax').innerHTML =formatcurrentcy( productpricesents +shippinpriceCent);
   document.querySelector('.tax').innerHTML = formatcurrentcy(tax);
   document.querySelector('.orderTotal').innerHTML = formatcurrentcy( productpricesents +shippinpriceCent + tax);
};
