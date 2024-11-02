
export let cart =   JSON.parse(localStorage.getItem('cart'))
if(!cart){
   cart =[
];
}
 export function saveTostorege(){
   localStorage.setItem('cart', JSON.stringify(cart))
 }
export function addTocard(productId) {
    let matchingitem;
    const selectElement =document.querySelector(`.selectElement-${productId}`).value;
    let  sum = '+';
      console.log(eval(selectElement,sum))  
 cart.forEach((cartItem)=>{
     if(productId === cartItem.productId){
       matchingitem = cartItem;
    
     }
 
   });
   if(matchingitem){
     matchingitem.Quantity += eval(selectElement,sum)
   }
  else{
  cart.push({
   productId:productId,
   Quantity:eval(selectElement,sum),
   deliveryOptionId: '2'
  })
  } 
  saveTostorege();
  
  };
   
   export function removeFromCard(productId){
     let  newcart =[];
     cart.forEach((cartItem) =>{

   if(cartItem.productId !== productId){
       newcart.push(cartItem);
      
   }
     })
     cart = newcart;
     saveTostorege();
  }
 export function updateDeliveryOption(productId, deliveryOptionId){
     let matchingiterm
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingiterm = cartItem;
        
     
      }
  
    });
     matchingiterm.deliveryOptionId = deliveryOptionId;
     saveTostorege();
  }