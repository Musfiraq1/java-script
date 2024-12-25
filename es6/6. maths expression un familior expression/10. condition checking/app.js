let ismarried = true;
let inactive = false;

let userinputtempc = prompt ("enter temperature in centigrade" , "30");


userinputtempc = Number(userinputtempc);

let condition = ( userinputtempc > 30)
console.log("condition:" , condition)

if(condition) {
  console.log("garmi ka mosam hai");

}
else{
   console.log("garmi ka mosam nhi hai");
}
//  falsy values: "",undefined,0,null,NaN,false , document.all
if( "cat" ){ 
console.log("condition is true")
}
else{
  console.log("condition is false")
}