var books = [{ isbn: '0375826688', title: 'Eragon', author: 'Christopher  Paolini' }, { isbn: '0385733976', title: 'Going Bovine', author: 'Libba Bray' }, { isbn: '9780545060394', title: 'The 39 Clues', author: 'Rick Riordan' }];
console.log('Books Array:', books);
console.log('Type Of Books Array:', typeof books);

var booksString = JSON.stringify(books);
console.log('Books String:', booksString);
console.log('Books String Type:', typeof booksString);

var jsonString = '{"id":89238754, "name":"Collin Hovey"}';
var jsonObject = JSON.parse(jsonString);
console.log('json Object:', jsonObject);
console.log('json Object Type:', typeof jsonObject);
