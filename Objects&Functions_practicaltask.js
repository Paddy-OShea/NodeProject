/*
-Create a car object, add a color property to it with the value equals 'black'
-Change the color property of the car object to 'green'
-Add the power property to the car object, 
which is a function and displays the engine power to the console
-Pears and apples are accepted to the warehouse, 
write a function that returns the result of adding the number of accepted pears and apples
-Your name is saved in the payment terminal, 
write a function to define the name in the terminal 
(if you entered your name, then hello + name, if not, then there is no such name)
-Write a function for calculating the type of argument and type output to the console
-Write a function that determines whether a number is prime or not */

var car = {
    power: '150 hp',
    color: 'black',
    get color() {
        return this.color;
    },
    set color(value) {
        this.color = value;
    },
    change0color: function (color) {
        this.color = 'green';
        console.log(this.color);
}
}


const fruits = {
    apples: 50,
    pears: 30,
    function add(apples, pears){
        let result = apples + pears;
        return result;
    }
}
 
function MeInPayTerm(name){
    this.name = Paul;
    this.running = function (){
     return this.name;
    }
    }

    var x = 513; 
    console.log(typeof x)
    x = 'string'; 
    console.log(typeof x)
    x = { key: 'value' };
    console.log(typeof x)
    function doMix(x) {
        if(typeof(x) === 'string') {
          alert('x is a string')
        } else if(typeof(x) === 'number') {
          alert('x is a number')
        }
      }

      const number = parseInt(prompt("Enter a positive natural number: "));
      let isPrime = true;
      if (number === 1) {
          console.log("1 is neither prime nor composite number.");
      }
      else if (number > 1) {
                for (let i = 2; i < number; i++) {
              if (number % i == 0) {
                  isPrime = false;
                  break;
              }
          }
          if (isPrime) {
              console.log(`${number} is a prime number`);
          } else {
              console.log(`${number} is a not prime number`);
          }
      }
      else {
          console.log("The number is not a prime number.");
      }