/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var newTransaction = new Transaction('deposit', amount);
  if (amount > 0 && (amount % 2 === 0 || amount % 2 === 1)) {
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var newTransaction = new Transaction('withdrawal', amount);
  if (amount > 0 && (amount % 2 === 0 || amount % 2 === 1)) {
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function (amount) {
  var totalWithdraw = 0;
  var totalDeposit = 0;
  var balance = 0;
  for (var x in this.transactions) {
    if (this.transactions[x].type === 'withdrawal') {
      totalWithdraw += this.transactions[x].amount;
    }
    if (this.transactions[x].type === 'deposit') {
      totalDeposit += this.transactions[x].amount;
    }
  }
  balance = totalDeposit - totalWithdraw;
  return balance;
};
