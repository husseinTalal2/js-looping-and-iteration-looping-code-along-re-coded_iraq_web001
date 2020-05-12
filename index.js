// Code your solutions in this file
function writeCards(names, event){
  const arr = [];
  for (let i = 0 ; i<names.length ;i++){
      arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

  }
  return arr;
}
function countDown(number){
  for (number; number >= 0; number--) {
    console.log(number);
  }
}
const names = ["Ada", "Brendan", "Ali"];
const cards = writeCards(names, 'surprise');
countDown(cards.length);
