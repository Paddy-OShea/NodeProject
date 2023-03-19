/*1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
  2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
  3. Get the day, month and year of the current date and output it to the console separately*/

  const mystr = 'ahb acb aeb aeeb adcb axeb';
  const re = /ahb/;
  console.log(mystr.match(re));

  const mystr = 'ahb acb aeb aeeb adcb axeb';
  const re = /acb/;
  console.log(mystr.match(re));

  const mystr = 'ahb acb aeb aeeb adcb axeb';
  const re = /aeb/;
  console.log(mystr.match(re));

  const newstr = '2 + 3 223 2223';
  const result = str.match (/2 + 3/);
  alert( result[1] );

  let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = dd+'/'+mm+'/'+yyyy;
console.log(today);
