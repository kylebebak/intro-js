fetch('https://swapi.co/api/films/').then(function(response) {
  if (!response.ok) {
    return
  }

  response.json().then(function(json) {
    // write this function
    const html = ''

    document.getElementById('body').innerHTML = html
  })
})
