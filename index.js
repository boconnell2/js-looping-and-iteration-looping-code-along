// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts
// }

let array = ["Ada", "Brendan", "Ali"]
let event = "birthday"

function writeCards(arrArg, eventName) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(`Thank you, ${arrArg[i]}, for the wonderful ${eventName} gift!`)
    }
    return output
}

function countDown(counter) {
    while ( counter >= 0) {
        console.log(counter);
        counter--;
    }
}