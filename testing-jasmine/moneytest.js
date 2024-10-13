 import {formatcurrentcy} from "../script/utils/maney.js";
 describe('test suite:formatcurrency',() =>{
 it('convert cents to dollars',()=>{
    expect(formatcurrentcy(2095)).toEqual('20.95');
 })
  it('works with 0',()=>{
    expect(formatcurrentcy(0)).toEqual('0.00')
  })
   it('rounding in the lowest cent',()=>{
     expect(formatcurrentcy(2000.5)).toEqual('20.01')
   })
 })