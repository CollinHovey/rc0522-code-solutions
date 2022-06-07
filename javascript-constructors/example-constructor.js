function ExampleConstructor() {

}
console.log('value of ExampleConstructor', ExampleConstructor);
console.log('type of ExampleConstructor', typeof ExampleConstructor);

var Example = new ExampleConstructor();
console.log('value of Example', Example);

var isInstanceOf = Example instanceof ExampleConstructor;
console.log('isInstanceOf:', isInstanceOf);
