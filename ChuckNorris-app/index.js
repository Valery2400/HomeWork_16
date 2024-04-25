const jokeElement = document.getElementById('joke');
    const reloadElement = document.getElementById('reload');

    function loadJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          jokeElement.textContent = data.value;
        })
    }
   
    window.addEventListener('load', loadJoke);

    reloadElement.addEventListener('click', loadJoke);