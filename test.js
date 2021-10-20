function loadData() {
      fetch("https://movie-database-imdb-alternative.p.rapidapi.com/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "9a7f952354msh57bf6f9c2d034d9p1b225cjsn24ed66bf3252"
      }
    })
    .then(response => {
        const apiData = response.json()
      console.log(apiData);
    })
    .catch(err => {
      console.log(err);
    });
    }
    loadData();
