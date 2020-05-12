// Code your solutions in this file
function writeCards(names, event){
  const arr = [""];
  for (let i = 0 ; i<names.length ;i++){
      arr.push(`thank you, ${names[i]}, for the ${event} gift.`)  ;
  }
  return arr
}

const names = ["Ada", "Brendan", "Ali"];

const cards = writeCards(names, 'surprise');
