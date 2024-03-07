let i = 0;
while (i < heros.length) {
    console.log(i,heros[i]);
    i++;
}

while (true) {
    const number = Math.ceil(Math.random() * 10);
    if (number === 7) {
        console.log("lucky 7");
        break;
    }
    console.log(number);
}
let index = 9;
// run first then check
do {
  console.log(index);
} while (index < 9);


do {
    i++;
    console.log("hello world 3");
} while (i <= 10);

function sapaNama(name = dani) {
    console.log(`Hello ${name}`);

}


// MAGIC NUMBER
const magicNumber = 7;
let number;

do {
  number = prompt("Guess a number between 1 and 10 : ");
  number = parseInt(number); // Convert the input string to a number
  if (number > magicNumber) {
    console.log("Too high");
  }
  if (number < magicNumber) {
    console.log("Too low");
  }
  if (number === magicNumber) {
    console.log("Correct");
  }
} while ( number !== magicNumber );


