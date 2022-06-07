/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && (balance % 2 === 0 || balance % 2 === 1)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber += 1;
    return newAccount.number;
  } else {
    return null;
  }

};

Bank.prototype.getAccount = function (number) {
  for (var x in this.accounts) {
    if (this.accounts[x].number === number) {
      return this.accounts[x];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  for (var x in this.accounts) {
    totalBalance += this.accounts[x].getBalance();
  }
  return totalBalance;
};
