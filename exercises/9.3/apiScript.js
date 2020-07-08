const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then (response => response.json())
    .then(data => {
      const jokeContainer =  document.getElementById('jokeContainer');
      const joke = document.createElement('p');
      joke.innerHTML = data.joke;
      jokeContainer.appendChild(joke);
    })
};

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

        


window.onload = () => fetchJoke();