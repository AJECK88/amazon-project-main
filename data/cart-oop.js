  export const cart= {
    cartItem:undefined,
   
 loadFromStorage(){
    this.cartItem =   JSON.parse(localStorage.getItem('cart-oop'))
    if(!this.cartItem){
      this.cartItem =[{
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
          stars: 4.5,
          count: 87
        }
    }
      ]
   }
  },
   saveTostorege(){
     localStorage.setItem('cart-oop', JSON.stringify(this.cartItem))
   },
   addTocard(productId) {
      let matchingitem;
      
   this.cartItem.forEach((cartItem)=>{
       if(productId === cartItem.productId){
         matchingitem = cartItem;
      
       }
   
     });
     if(matchingitem){
       matchingitem.Quantity += 1
     }
    else{
    this.cartItem.push({
     productId:productId,
     Quantity:1,
     deliveryOptionId: '2'
    })
    } 
    this.saveTostorege();
    },
     
     removeFromCard(productId){
       let  newcart =[];
       this.cartItem.forEach((cartItem) =>{
  
     if(cartItem.productId !== productId){
         newcart.push(cartItem);
        
     }
       })
       this.cartItem = newcart;
       this.saveTostorege();
    },
   updateDeliveryOption(productId, deliveryOptionId){
       let matchingiterm
      cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingiterm = cartItem;
          
       
        }
    
      });
       matchingiterm.deliveryOptionId = deliveryOptionId;
       this.saveTostorege();
    }
 }
console.log(cart)
cart.loadFromStorage()