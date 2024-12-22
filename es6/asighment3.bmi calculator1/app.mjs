function CalculateBMI() {
    let heightinputfeet = document.getElementById("heightinputfeet").value;
    let heightinputinch = document.querySelector("#heightinputinch").value;
    
    let weightinputkg = document.querySelector("#weightinputkg").value;
    
    heightinputfeet = parseInt(heightinputfeet);
    heightinputinch = parseInt(heightinputinch);
    
    
    heightinputinch += heightinputfeet * 12;
    
    let heightinmeter = (heightinputinch * 2.54) / 100;
     
    let  heightinmetersq = heightinmeter * heightinmeter;
       
    let bodymassindex = weightinputkg / heightinmetersq;
    
    let  idealweight = 22 * heightinmetersq;
    
    let weightToLose = (weightinputkg - idealweight).toFixed(2);
    
    let weightToGain = (idealweight - weightinputkg).toFixed(2);
    
    
    let suggestion = "you are ";
    
    
    if(bodymassindex > 30){
        suggestion += `Obese. you need to lose ${weightToLose}kg `;
    }
    
    else if(bodymassindex > 25){
        suggestion += `Overweight. you need to lose ${weightToLose}kg `;
    }
    
    else if(bodymassindex > 18.5){
    
        if(bodymassindex > 22){
            suggestion += `Normal.  but optionally you may lose ${weightToLose} indexes to become ideally fit`;
        }
        else if(parseInt(bodymassindex) === 22) {
            suggestion += `Perfectly Fit`;
        }
        else {
            suggestion += `Normal. but optionally you may gain ${weightToGain} indexes to become ideally fit`;
        }
          
          
    }
    
    
    
    
    else {
        suggestion += `Underweight. you are supposed to gain ${weightToGain}kg to become normal `;
    }
    
    
    console.log("index: ", bodymassindex );
    console.log("title: ", title );
    console.log("idealweight: ", idealweight );
    
    
    
    document.querySelector("#title").innerHTML =  `ideal weight: ${(idealweight).toFixed(2)} kg`;
    document.querySelector("#suggestion").innerHTML = suggestion  ;
    
    
    }