import { formatcurrentcy } from "../../../script/utils/maney.js";
/* || using a test cases to check my out come if it is correct. */
 
console.log("converting cent int dollars")
if (formatcurrentcy(6054 ) === '60.54'){
    console.log("passed");
}else{
    console.log('failed');
}
console.log('work with "0"')
if(formatcurrentcy(0)== 0.00){
    console.log('passed')

}else{
    console.log('failed')
} 
console.log("rounding in lowest cent")
 if (formatcurrentcy(2000.5)=== "20.01"){
    console.log('passed')
 }else{
    console.log('failed')
 }