/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var total = 0;
    for (var x = 0; x < numbers.length; x++) {
      total += numbers[x];
    }
    return total;
  },
  getAverage: function (numbers) {
    var total = 0;
    for (var x = 0; x < numbers.length; x++) {
      total += numbers[x];
    }
    return total / numbers.length;
  }
};
