/*
1. Given an array consisting of movie names, iterate over the array 
with the output of the names of each movie to the console
2. Given an array of car manufacturers, 
convert the array to a string and back to an array
3. Given an array of the names of your friends, 
add the words hello to each element of the array 
4. Convert numeric array to Boolean
5. Sort the array [1,6,7,8,3,4,5,6] in descending order
6. Filter array [1,6,7,8,3,4,5,6] by value> 3
7. Write a function that takes two parameters - an array and a number and outputs the 
index of an array element equal to a number
8. Implement a loop that will print the number 'a' until it is less than 10
9. Implement a loop that prints prime numbers to the console
10. Implement a loop that prints odd numbers to the console*/

let movies = ["Die hard", "Predator", "Brave Heart", "Back to the future"];
for(let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }

let cars= ["Toyota", "Honda", "Lancia", "BMW", "Rover"];
console.log(cars);
cars.toString();
cars.log(myString);
let newArray= newArray.split(",");
console.log(newArray);

let friends= ["Eugene", "Alex", "John",]
let Hello = (array) => {
  let newfriends = array.map(x => {
    return "Hello," + x;
  });
  console.log(newfriends);
 };

Hello(friends);

const num = [0, 1, 2, 3, 4];
for(var i=0; i<num.length; i++) num[i] = num[i] === 'true';
console.log(num);

const numbers= [1,6,7,8,3,4,5,6];
numbers.sort();
numbers.reverse();
console.log(numbers)

const values= [1,6,7,8,3,4,5,6];
const newvalues= values.filter(currentvalue => currentvalue > 3);
console.log(newvalues)

let numers = [3, 5, 6, 10, 20];
function isNumberInList(numers, numers) {
  var result = false;
  if(numers.indexOf(number)!=-1){
     result = true;
  }
  return result;
}

for (let a = 1; a < 10; a++) {
    console.log(a);
}
// or we can use while loop
let a = 0;
while (a < 10) { 
  alert( a );
  a++;
}


for (prime = 0; prime < 50; prime = prime + 1)  
{
    testPrime = 0;
    for (testNum = 1; testNum <=100; testNum = testNum + 1)
    {
        var testRes = prime % testNum;
        if (testRes === 0)
        {
        testPrime = testPrime + 1;
        }
    }
    if (testPrime === 2)
    {
        console.log(prime);
    }
}


for (var i = 0; i < 20; i++) {
    if (i % 2 != 0) {
      console.log(i)
    }
  }


