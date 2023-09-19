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

//Assign variables to each DOM target.
const toyCollection = document.querySelector('#toy-collection');
const submitBtn = document.querySelector('#new-toy-btn');

//TODO loadToys on DOMContentLoaded
//Send GET request to server/toys and populate the page
const loadToys = () => {
  return fetch('http://localhost:3000/toys', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  //Return a toysObj 
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

//Attach event listener to document for DOMContentLoaded event.
//Displays all toys and associated info in collection on page load.
document.addEventListener('DOMContentLoaded', loadToys)

//TODO renderToy
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
      const likeBtn = createLikeBtn();
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

//Creates like button and attaches handleSubmit listener to it
const createLikeBtn = () => {
  const likeBtn = document.createElement('button');
  likeBtn.textContent = '♥ Like'
  likeBtn.addEventListener('click',)
  return likeBtn;
};

//Appends the rendered toy to the #toy-collection <div> on the DOM

//TODO higherOrder functions that pass both submit events (add toy and add like) through handleSubmit
//One PATCHes the number of likes from db and updates it

//Other POSTs the new toy object

//TODO handleSubmit
//Send POST request to server/toys and add the new toyObj to the collection in db.json.

//On success
//Update the DOM to show the toy without reloading the page.

//On failure
//Catch errors
//Alert user

//TODO handleLike
//Send PATCH request to server/toys/:id and update the value of likes.

//Capture parent toy's id

//Calculate updated likes value

//Submit PATCH request

//Update the card in the DOM based on response from server.

//Call function to update DOM element

//Catch errors
