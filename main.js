const joke = document.querySelector('.joke');
const btn = document.querySelector('#btn'); 
const jokeparagraph = document.querySelector('.joke p');



btn.addEventListener('click', getRandomizeJoke);

getRandomizeJoke();

async function getRandomizeJoke(){
    const jokeResponse = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept' : 'application/json'
        }
     })
     const responseJson = await jokeResponse.json();

     jokeparagraph.innerHTML = responseJson.joke;


}