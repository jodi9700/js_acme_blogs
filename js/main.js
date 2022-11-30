// INF 651 - Final Project
// Fall 2022
// Jodi Bills


// createElemWithText:
// Receives up to 3 parameters
// 1st parameter is the HTML element string name to be created (h1, p, button, etc)
// Set a default value for the 1st parameter to “p”
// 2nd parameter is the textContent of the element to be created
// Default value of the 2nd parameter is “”
// 3rd parameter is a className if one is to be applied (optional)
const createElemWithText = (tagName = "p", content = "", name) => {
    
    // Use document.createElement() to create the requested HTML element
    let elem = document.createElement(tagName);

    // Set the other desired element attributes.
    elem.textContent = content;
    if(name) elem.className = name;

    // Return the created element.
    return elem;
}


// createSelectOptions:
// Receives users JSON data as a parameter
const createSelectOptions = (jsonData) => {

    // Returns undefined if no parameter received
    if (!jsonData) return;

    
    const arr = [];

    // Loops through the users data
    jsonData.forEach(user => {

        // Creates an option element for each user with document.createElement()
        const option = document.createElement("option");

        // Assigns the user.id to the option.value
        option.value = user.id;

        // Assigns the user.name to the option.textContent
        option.textContent = user.name;

        arr.push(option);
    })

    // Return an array of options elements
    return arr;
}


// toggleCommentSection:
// Receives a postId as the parameter
const toggleCommentSection = (postId) => {

    if (!postId) return;

    // Selects the section element with the data-post-id attribute equal to the postId
    //    received as a parameter
    let section = document.querySelector(`[data-post-id='${postId}']`);
    
    // Use code to verify the section exists before attempting to access the classList
    //    property
    if (section) {
        // Toggles the class 'hide' on the section element
        section.classList.toggle('hide');

        // Return the section element
        return section;
    }
    return null;
}


// toggleCommentButton:
// Receives a postId as the parameter
// Selects the button with the data-post-id attribute equal to the postId received as a
//    parameter
// If the button textContent is 'Show Comments' switch textContent to 'Hide
//    Comments'
// If the button textContent is 'Hide Comments' switch textContent to 'Show
//    Comments'
// Suggestion (not required) for above: try a ternary statement
// Return the button element


// deleteChildElements:
// Receives a parentElement as a parameter
// Define a child variable as parentElement.lastElementChild
// While the child exists…(use a while loop)
// Use parentElement.removeChild to remove the child in the loop
// Reassign child to parentElement.lastElementChild in the loop
// Return the parentElement


// addButtonListeners:
// Selects all buttons nested inside the main element
// If buttons exist:
// Loop through the NodeList of buttons
// Gets the postId from button.dataset.postId
// Adds a click event listener to each button (reference addEventListener)
// The listener calls an anonymous function (see cheatsheet)
// Inside the anonymous function: the function toggleComments is called with the
//    event and postId as parameters
// Return the button elements which were selected
// You may want to define an empty toggleComments function for now. Not all tests
//    will pass for addButtonListeners until toggleComments exists. I recommend
//    waiting on the logic inside the toggleComments function until we get there.


// removeButtonListeners:
// Selects all buttons nested inside the main element
// Loops through the NodeList of buttons
// Gets the postId from button.dataset.id
// Removes the click event listener from each button (reference
//    removeEventListener)
// Refer to the addButtonListeners function as this should be nearly identical
// Return the button elements which were selected


// createComments:
// Depends on the createElemWithText function we created
// Receives JSON comments data as a parameter
// Creates a fragment element with document.createDocumentFragment()
// Loop through the comments
// For each comment do the following:
// Create an article element with document.createElement()
// Create an h3 element with createElemWithText('h3', comment.name)
// Create an paragraph element with createElemWithText('p', comment.body)
// Create an paragraph element with createElemWithText('p', `From:
//    ${comment.email}`)
// Append the h3 and paragraphs to the article element (see cheatsheet)
// Append the article element to the fragment
// Return the fragment element


// populateSelectMenu:
// Depends on the createSelectOptions function we created
// Receives the users JSON data as a parameter
// Selects the #selectMenu element by id
// Passes the users JSON data to createSelectOptions()
// Receives an array of option elements from createSelectOptions
// Loops through the options elements and appends each option element to the
//    select menu
// Return the selectMenu element
