function calculatorBMI() {
 let heightinputfeet = document.getElementById("heightinputfeet").value;
 let heightinputinch = document.querySelector("#heightinputfeet") .value;
 let weightinputkg = document.querySelector("#weightinputkg") .value;
 heightinputfeet = parseInt(heightinputfeet);
 heightinputinch = parseInt(heightinputinch);

 heightinputinch += heightinputfeet * 12;
 let heightinmeter = heightinputinch * 2.54 / 100;
 let heightinmetersq = heightinmeter * heightinmeter ;
 let bodymassindex = weightinputkg / heightinmetersq;
 let tittle = " you are";
 if (bodymassindex > 30){
  tittle += `obese. you need to lose ${bodymassindex - 22} indexes`;
 } else if( bodymassindex > 25){
  tittle += `over weight. you need to lose ${bodymassindex - 22} indexes`;
 } else if( bodymassindex > 18.5){
  
  if(bodymassindex > 22){
  tittle += `normal. opitionally you may lose ${bodymassindex - 22} indexes to become ideally fit`;
}else{
  tittle += `normal. opitionally you may gain ${22 - bodymassindex } indexes to become ideally fit`;
}

 } else{
  tittle +=`under weight. you need to gain ${22 - bodymassindex} indexes to become normal`;
 }
 console.log("index: ", bodymassindex)
 console.log("tittle: ", tittle)

}