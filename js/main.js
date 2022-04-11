//Get a book photo from the openlibrary.org api and place the photo in the DOM

document.querySelector('button').addEventListener('click', getText)

function getText (){
    let verse = document.querySelector('input').value

fetch(`https://bible-api.com/${verse}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.text
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }



