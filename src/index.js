let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//! Assign variables to each DOM target.
const toyCollection = document.querySelector('#toy-collection');
const submitBtn = document.querySelector('.submit');
const newToyName = document.querySelector('input[name="name"]')
const newToyImg = document.querySelector('input[name="image"]')

//! loadToys() on DOMContentLoaded
//Send GET request to server/toys and populate the page
const loadToys = () => {
  return fetch('http://localhost:3000/toys', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  //Return a toysObj in POJO
  .then(resp => resp.json())
  //Iterate through toysObj and pass each toy to renderToy
  .then(data => {
    data.forEach(renderToy);
  })
  //Handle errors
  .catch(error => {
    console.log('Failed to load')
  })
};

//! Attach event listener to document for DOMContentLoaded event.
//Displays all toys and associated info in collection on page load.
document.addEventListener('DOMContentLoaded', loadToys)

//! define renderToy()
//Populates a card with toy values from db
const renderToy = (toyObj) => {
    //Render HTML container
    const toyCard = document.createElement('div');
      const toyName = document.createElement('h2');
      toyCard.appendChild(toyName);
      const toyImg = document.createElement('img');
      toyCard.appendChild(toyImg);
      const numOfLikes = document.createElement('p');
      toyCard.appendChild(numOfLikes);
      const likeBtn = createLikeBtn(toyObj.id);
      //! Add event listener with like handler
        //TODO Define this listener in createLikeBtn() to clean up this function
        likeBtn.addEventListener('click', () => {
          //Obtain current likes from DOM Object
          let currentLikes = parseInt(numOfLikes.textContent);
          //Pass the updated DOM Object to the PATCH request
          return fetch(`http://localhost:3000/toys/${toyObj.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            //Increase likes by 1 in the db first to render pessimistically
            'likes': currentLikes + 1
          }),
        })
        //Return a toyObj as POJO
        .then(resp => resp.json())
        //Update likes on toyObj in the DOM
        .then(data => {
          //Increase likes by 1 on the DOM in the event of a successful PATCH
          numOfLikes.textContent = currentLikes + 1;
        })
        .catch(error => {
          alert('Operation unsuccessful. Failed to save toy in database.')
          console.log('Operation unsuccessful. Failed to update toy in database.')
        })
      })
      //Attach fully defined button to card
      toyCard.appendChild(likeBtn);
    //Assign classes
    toyCard.className = 'card';
      likeBtn.className = 'like-btn'
    //Change properties of HTML element to reflect passed in toyObj
    toyName.textContent = toyObj.name;
    toyImg.src = toyObj.image;
    numOfLikes.textContent = toyObj.likes;
    //Append it to the DOM
    toyCollection.appendChild(toyCard);
};

//! define createLikeBtn()
//Creates like button and attaches handleSubmit listener to it
const createLikeBtn = (toyId) => {
  const likeBtn = document.createElement('button');
  likeBtn.textContent = '♥ Like'
  //Adds ID for ability to target toy in db
  likeBtn.id = toyId
  //Event listener to fire when like button is clicked
  likeBtn.addEventListener('click', (e) => {
  })
  return likeBtn;
};

//! define handleSubmit
//Send POST request to server/toys and add the new toyObj to the collection in db.json.
//preventDefault() on form behavior
const handleSubmit = (e) => {
  //Prevent page refresh
  e.preventDefault();
  //Capture input values from global variables which target input name attribute.
  const submittedToyName = newToyName.value
  const submittedToyImg = newToyImg.value
  //Send POST request to server/toys
  return fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      'name': submittedToyName,
      'image': submittedToyImg,
      'likes': 0,
    })
  })
  //Return a toyObj as POJO
  .then(resp => resp.json())
  //Display that toyObj in the DOM
  .then(data => renderToy(data))
  //Reset submission form
  .then(() => document.querySelector('form').reset())
  //Handle errors
  .catch(error => {
    alert('Operation unsuccessful. Failed to save toy in database.')
    console.log('Operation unsuccessful. Failed to save toy in database.')
  })
  

}

//! Add event listener to form
submitBtn.addEventListener('click', handleSubmit)