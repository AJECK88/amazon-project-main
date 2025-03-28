import { cart ,addTocard} from "../data/cart.js "
import { products } from "../data/products.js"
import { formatcurrentcy } from "./utils/maney.js"

let productshtml =""

products.forEach((products)=>{
    productshtml += `
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${formatcurrentcy(products.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="selectElement-${products.id}" click ='changeNum(})'>
              <option selected="" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
             Added
          </div>

          <button class="add-to-cart-button button-primary js-add-card " data-product-id = ${products.id}>
            Add to Cart
         </button>
        </div>
    `
})



const  jsproductGrid = document.querySelector('.js-product-grid')
jsproductGrid.innerHTML= productshtml;

 function updateCardQountity(){
  let cartQuantity = 0;
  cart.forEach((cartItem)=> {
       cartQuantity += cartItem.Quantity
       document.querySelector(".cart-quantity").innerHTML=  cartQuantity
  });
 }
document.querySelectorAll(".js-add-card").forEach((button)=>{
  button.addEventListener('click', ()=>{
 const productId = (button.dataset.productId );
 addTocard(productId);
 updateCardQountity(productId);

  });
});

