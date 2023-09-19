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

//TODO renderToys
//Send GET request to server/toys and populate the page
const renderToys = () => {

}
//Return a toysObj 

//Handle errors

//Iterate through toysObj and pass each toy to renderToy

//TODO renderToy
//Create <div> to attach data to
const renderToy = (toyObj) => {
  const toyCard = document.createElement('div');
  //Assign the card class to it
  toyCard.className = 'card';
  
  //Append it to the DOM
  toyCollection.appendChild(toyCard);
  //Takes in arguments from each toy in toyObj and for id, name, image src, image alt, and likes
  // const renderToy = (toyObj) => {
  //   toyCard
  // }
}
//Creates like button and attaches handleSubmit listener to it

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
