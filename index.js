let depth;
function scuberGreetingForFeet(depth){
  // Write your code here!
  let result;
  if (depth <= 400) { 
    result = "This one is on me!";
  } else if (depth > 400 && depth <=2000) {
    result = "That will be twenty bucks.";
  } else if (depth > 2000 && depth < 2500){
    result = "I will gladly take your thirty bucks.";
  } else if (depth > 2500){
    result = "No can do.";
  }
  return result;
}

let city;
function ternaryCheckCity(city){
  // Write your code here!
  const checkCity = city === "NYC"? "Ok, sounds good." : "No go.";
  return checkCity;
}

let tip;
function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch (tip){
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
    
  } return response;
}