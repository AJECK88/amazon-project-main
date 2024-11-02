import {addTocard,cart,loadFromStorage} from "../../data/cart.js"
describe('test suite:Addtocard', ()=>{
    it('add an exsiting product to the card',()=>{
      spyOn( localStorage,'setItem')
    })
   it ('adds a new product to the cart',()=>{
    spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([])   
    });
      loadFromStorage();
       addTocard('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
  /*  expect(localStorage.setItem).toHaveBeenCalledTimes(1);  */
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
   expect(cart[0].Quantity).toEqual(1) 
   })

})