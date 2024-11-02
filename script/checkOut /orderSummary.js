import {cart,addTocard,removeFromCard, updateDeliveryOption} from '../../data/cart.js'
import { getProduct} from '../../data/products.js';
import { formatcurrentcy } from '../utils/maney.js';
 import dayjs  from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
 import { renderPaymentsummary } from './paymentSummary.js';
 import {deliveryOption, getDeliveryOption} from '../../data/deliveryOption.js' 
 import { saveTostorege } from '../../data/cart.js';
   let today = dayjs();
 const  delivaryDate = today.add( 6, 'days');
console.log( delivaryDate.format('dddd, MMMM d'))
export function reloadOrderSummary(){
let cartSummaryHTML = ""
cart.forEach((cartIterm)=>{
    const productId = cartIterm.productId ;
    const marchingprudect = getProduct(productId);
  
 const deliveryOptionId = cartIterm.deliveryOptionId
  const deliveryOptions = getDeliveryOption(deliveryOptionId );
 
 
    let today = dayjs();
    const deliveryDate =today.add(deliveryOptions.deliveryDays, 'days');
     const daystring = deliveryDate.format('dddd , MMMM D');
         
     cartSummaryHTML +=
    `
     <div class="cart-item-container  js-cart-item-container-${marchingprudect.id}">
            <div class="delivery-date">
              Delivery date:${daystring}
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
                  <span class= "update-quantity-link  link-primary link-primary-${marchingprudect.id} js-update-quantity-link-${marchingprudect.id}" data-product-id = "${marchingprudect.id}">
                    Update 
                  </span>
                  <span class= "quantity-update  js-quantity-update-${marchingprudect.id}" >
                  <button type = button class = "addButton-${marchingprudect.id}">Add</button><input type = number  class ='js-quantity-update-link-${marchingprudect.id}' >
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
               ${deliveryOptionHTML(marchingprudect, cartIterm)}
              </div> 
              </div>
          </div>
      </div>
    `;

  });


function deliveryOptionHTML(marchingprudect, cartIterm){
  let Html = '';
  deliveryOption.forEach((deliveryOptions)=>{
    let today = dayjs();
   
          if( deliveryOptions.deliveryDays == 7){
             deliveryOptions.deliveryDays =2;
             const deliveryDate =today.add(deliveryOptions.deliveryDays, 'days');
              const daystring = deliveryDate.format('dddd , MMMM D');
              deliveryOptionCall(daystring);
          
         }
    else if(deliveryOptions.deliveryDays == 1){
          deliveryOptions.deliveryDays = 5;
          const deliveryDate =today.add(deliveryOptions.deliveryDays, 'days');
           const daystring = deliveryDate.format('dddd , MMMM D');
           deliveryOptionCall(daystring);
        } 
          else{
         const deliveryDate =today.add(deliveryOptions.deliveryDays, 'days');
         const daystring = deliveryDate.format('dddd , MMMM D');
         deliveryOptionCall(daystring);

          } 
          
          function deliveryOptionCall(daystring){
      const priceString = deliveryOptions.priceCents === 0
      ? 'FREE'
      : `$${formatcurrentcy(deliveryOptions.priceCents)}-`;
       const countDelivaryCartIterm = cartIterm.deliveryOptionId;
      const ischecked = deliveryOptions.id === countDelivaryCartIterm;
      renderPaymentsummary();
       Html += 
    `<div class="delivery-option js-delivery-option" 
    data-product-id =${marchingprudect.id}
    data-delivery-option-id = ${deliveryOptions.id}>
                  <input type="radio" ${ischecked ? 'checked'  :""}
                    class="delivery-option-input"
                    name="delivery-option-${marchingprudect.id}">
                  <div>
                    <div class="delivery-option-date">
                       ${daystring}
                    </div> 
                    <div class="delivery-option-price">
                      ${priceString}- Shipping
                  </div>
                </div>
                 </div>
        ` ;  
     
              
          }
        })

 return Html 
 };
 
document.querySelector(".js-order-summary").innerHTML= cartSummaryHTML;
document.querySelectorAll(".js-delet-link").
  forEach((link)=>{
  link.addEventListener('click', () =>{
     const productId =link.dataset.productId;
     removeFromCard(productId);
     console.log(cart)
     const container =document.querySelector(
      `.js-cart-item-container-${productId}
      ` ,
      renderPaymentsummary()
    );
    console.log(container)
    container.remove(); 
   
    
  }) 


  
        /* || diplaying an aditional input  */  
       const productId =link.dataset.productId
        const AddButton = document.querySelector(`.addButton-${productId}`)
         document.querySelectorAll(`.js-update-quantity-link-${productId}`).
        forEach((displayUpadatelist)=>{
          displayUpadatelist.addEventListener('click',()=>{
             const productId = displayUpadatelist.dataset.productId
             
             const updatInactive = document.querySelector(`.link-primary-${productId}`)
             const quantity = document.querySelector(`.js-quantity-update-${productId}`);
          
             quantity.classList.add('quantity-update-active')
             updatInactive.classList.add('link-primary-active')
            }) 
     
        AddButton.addEventListener('click', ()=>{
          /*  const productId = displayUpadatelist.dataset.productId */
        const clickToUpadate =document.querySelector(`.js-quantity-update-link-${productId}`).value;
          const quantity = document.querySelector(`.js-quantity-update-${productId}`);
          const updatInactive = document.querySelector(`.link-primary-${productId}`)
          quantity.classList.remove('quantity-update-active')
          updatInactive.classList.remove('link-primary-active') 
        
          
          let  sum = '+';
           console.log(clickToUpadate) 
            let matchingitem
           cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
              matchingitem = cartItem;
           
            }
        
          });
          if(matchingitem){
            matchingitem.Quantity += eval(clickToUpadate,sum)
          }
         else{
         cart.push({
          productId:productId,
          Quantity:eval(clickToUpadate,sum),
          deliveryOptionId: '2'
         })
         } 
         saveTostorege();
         
       
          reloadOrderSummary()
        })
      
        
})  
 

})
 
document.querySelectorAll('.js-delivery-option')
.forEach((element)=>{
   element.addEventListener ('click',() =>{
    const {productId, deliveryOptionId} = element.dataset
  updateDeliveryOption(productId,deliveryOptionId)
    reloadOrderSummary();
   })
 
})

}
reloadOrderSummary();
  