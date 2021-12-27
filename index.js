let rideDistance;
let city;
let response;
let tip;
let charm;

function scuberGreetingForFeet(rideDistance){
  if (rideDistance <= 400) {
    return 'This one is on me!';
  }
  else if ((rideDistance >= 2000) && (rideDistance <= 2500)) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (rideDistance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  city === "NYC" ? (response = "Ok, sounds good.") : (response = "No go.");
  return response;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      charm = "Thank you so much.";
      break;
    case "not as generous":
      charm = "Thank you.";
      break;
    default:
      charm = "Bye.";
      break;
  }
  return charm;
}