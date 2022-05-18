var num1 = 23;
var num2 = 15;
var num3 = 6;
var maximumValue = Math.max(num1, num2, num3);
console.log('Highest Number:', maximumValue);

var heroes = [
  'Spider-Man',
  'Doctor Strange',
  'Constantine',
  'Shazam'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
randomIndex = Math.floor(randomNumber);
console.log('Random Number:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Going Bovine',
    author: 'Libba Bray'
  },
  {
    title: 'The 39 Clues',
    author: 'Rick Riordon'
  },
  {
    title: 'Eragon',
    author: 'Christopher Paolini'
  }
];
var lastBook = library.pop();
console.log('Last Book:', lastBook);

var firstBook = library.shift();
console.log('First Book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}
library.push(js);
library.unshift(css)
library.splice(1, 1);
console.log('New Library:', library);

var fullName = 'Collin Hovey';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('First Name;', sayMyName);
