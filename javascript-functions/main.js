function convertMinutesToSecond(minutes) {
  return minutes * 60;
}
console.log('Minutes to Seconds Function:', convertMinutesToSecond(5));

function greet(name) {
  return '"Hey, ' + name + '"';
}
console.log('Greeting Function: ', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('Area Function:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('Get First Name Function:', '"' + getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }) + '"');

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('Get Last Item in Array Function:', '"' + getLastElement(['propane', 'and', 'propane', 'accessories']) + '"');
