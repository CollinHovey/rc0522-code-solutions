var student = {
  firstName: 'Collin',
  lastName: 'Hovey',
  age: 22
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Server';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2011
};

vehicle['color'] = 'gold';
vehicle['isConvertible'] = false;
console.log('value of vehicle.color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Daisy',
  type: 'Golden Doodle'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
