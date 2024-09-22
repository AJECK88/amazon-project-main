export const cart =[];
import function addTocard(productId) {
    let 
    matchingitem;
 cart.forEach((cartItem)=>{
     if(productId === cartItem.productId){
       matchingitem =cartItem;
    
     }
 
   });
   if(matchingitem){
     matchingitem.Quantity +=1
   }
  else{
  cart.push({productId:productId,
   Quantity:1})
  } 
  };