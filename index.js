function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet > 0 && feet < 400) {
    return 'This one is on me!'
  }else if(feet >= 2500) {
    return 'No can do.'
  }else if(feet >= 2000) {
    return 'I will gladly take your thirty bucks.'
  }else if(feet >= 400) {
    return 'That will be twenty bucks.'
  }
}
console.log(scuberGreetingForFeet(2500));


function ternaryCheckCity(destination){
  // Write your code here!
  return (destination === 'NYC') ? 'Ok, sounds good.' : 'No go.'
}
console.log(ternaryCheckCity('NY'))

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';      
  }
}

