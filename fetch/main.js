fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json()
    .then(data => console.log('typicode data:', data))
  );

fetch('https://pokeapi.co/api/v2/pokemon/1', {
  method: 'GET'
})
  .then(response => response.json()
    .then(data => console.log('pokemon data:', data))
  );
