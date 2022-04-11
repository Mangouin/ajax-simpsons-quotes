// This function loads pokemon data from the Pokemon API
function fetchSimpsonQuoteJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[0]; // response.data instead of response.json() with fetch
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson);
  
        // Build a block of HTML
        const simpsonHtml = `
          <p><strong>${simpson.quote}</strong></p>
          <p><strong>${simpson.character}</strong></p>
          <img src="${simpson.image}" />
          <p><strong>${simpson.characterDirection}</strong></p>
        `;
        document.querySelector('#simpsons').innerHTML = simpsonHtml;
      });
  }
  
  fetchSimpsonQuoteJSON();