const takeAChance = require('./take-a-chance');

const prom = takeAChance('Collin');
prom.then(value => {console.log(value)});
prom.catch(err => {console.log(err.message)});
