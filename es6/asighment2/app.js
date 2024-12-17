const alertFunction = () => {
  let userInput = prompt("What do you want to see? Type 'aquatic' or 'land' or 'birds'.");

  if (userInput.toLowerCase() === "aquatic") {
    document.write("<b>Types of AQUATIC ANIMALS:</b>");
    document.write("<br>• Sea horse");
    document.write("<br>• Jellyfish");
    document.write("<br>• Octopus");
    document.write("<br>• Starfish");
    document.write("<br>• Lobster");
  } 
  else if (userInput.toLowerCase() === "land") {
    document.write("<b>Types of LAND ANIMALS:</b>");
    document.write("<br>• Tiger");
    document.write("<br>• Lion");
    document.write("<br>• Zebra");
    document.write("<br>• Deer");
    document.write("<br>• Hippopotamus");
  } 
  else if (userInput.toLowerCase() === "birds") {
    document.write("<b>Types of BIRDS:</b>");
    document.write("<br>• Green parrot");
    document.write("<br>• Grey parrot");
    document.write("<br>• Crow");
    document.write("<br>• Eagle");
    document.write("<br>• Owl");
  } 
  else {
    document.write("<b>Invalid input! Please type 'aquatic', 'land', or 'birds'.</b>");
  }
};
