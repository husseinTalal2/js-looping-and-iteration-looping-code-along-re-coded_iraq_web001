// Code your solutions in this file
function writeCards(names, event){
  for (let i = 0 ; i<names.length ;i++){
      console.log(`thank you, ${names[i]}, for the ${event} gift. `);
  }
}

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
writeCards(names, event);
