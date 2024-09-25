import {cart,removeFromCard} from '../data/cart.js'
import { products } from '../data/products.js';
import { formatcurrentcy } from './utils/maney.js';

let cartSummaryHTML = ""
cart.forEach((cartIterm)=>{
    const productId = cartIterm.productId;
    let marchingprudect;
   
    products.forEach((product)=>{
        if(product.id === productId){
           marchingprudect = product;

        }

    });

     cartSummaryHTML +=
    `
     <div class="cart-item-container  js-cart-item-container-${marchingprudect.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${marchingprudect.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 ${marchingprudect.name}
                </div>
                <div class="product-price">
                   ${formatcurrentcy(marchingprudect.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartIterm.Quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delet-link " data-product-id = "${marchingprudect.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${marchingprudect.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${marchingprudect.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${marchingprudect.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

`
});

document.querySelector(".js-order-summary").innerHTML= cartSummaryHTML;
document.querySelectorAll(".js-delet-link").
  forEach((link)=>{
  link.addEventListener('click', () =>{
     const productId =link.dataset.productId;
     removeFromCard(productId);
     console.log(cart)
    /*  const container =document.querySelector(
      `js-cart-item-container-${productId}
      `
    ) */
  
  })

})

