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

    // Returns undefined if not passed a parameter
    if (!postId) return;

    // Selects the section element with the data-post-id attribute equal to the postId
    //    received as a parameter
    let section = document.querySelector(`[data-post-id='${postId}']`);
    
    // Use code to verify the section exists before attempting to access the classList
    //      property
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
const toggleCommentButton = (postId) => {

    // Returns undefined if not passed a parameter
    if (!postId) return;

    // Selects the button with the data-post-id attribute equal to the postId received as a
    //      parameter
    let button = document.querySelector(`[data-post-id='${postId}']`);

    if (button) {

        // If the button textContent is 'Show Comments' switch textContent to 'Hide
        //      Comments'
        // If the button textContent is 'Hide Comments' switch textContent to 'Show
        //      Comments'
        button.textContent === "Show Comments" ? button.textContent = "Hide Comments" :
        button.textContent = "Show Comments";

        // Return the button element
        return button;
    }
    return null;
}


// deleteChildElements:
// Receives a parentElement as a parameter
const deleteChildElements = (parentElement) => {

    // Returns undefined if not passed a HTML element as parameter
    if (!(parentElement instanceof Element)) return;
    
    // Define a child variable as parentElement.lastElementChild
    let child = parentElement.lastElementChild;

    // While the child exists…(use a while loop)
    while (child) {

        // Use parentElement.removeChild to remove the child in the loop
        parentElement.removeChild(child);
        
        // Reassign child to parentElement.lastElementChild in the loop
        child = parentElement.lastElementChild;
    }

    // Return the parentElement
    return parentElement;
}


// addButtonListeners:
const addButtonListeners = () => {

    // Selects all buttons nested inside the main element
    let buttons = document.querySelectorAll('main button');

    // If buttons exist
    if (buttons) {

        // Loop through the NodeList of buttons
        for (const button of buttons) {

            // Gets the postId from button.dataset.postId
            let postId = button.dataset.postId;

            // Adds a click event listener to each button (reference addEventListener)
            // The listener calls an anonymous function
            button.addEventListener('click', event => {

                // Inside the anonymous function: the function toggleComments is called with the
                //      event and postId as parameters
                toggleComments(event, postId);
            })
        }

        // Return the button elements which were selected
        return buttons;       

    }
    return null;
}


// removeButtonListeners:
const removeButtonListeners = () => {

    // Selects all buttons nested inside the main element
    let buttons = document.querySelectorAll('main button');

    // If buttons exist
    if (buttons) {

        // Loop through the NodeList of buttons
        for (const button of buttons) {

            // Gets the postId from button.dataset.postId
            let postId = button.dataset.postId;

            // Removes the click event listener from each button (reference
            //      removeEventListener)
            button.removeEventListener('click', event => {

                // Inside the anonymous function: the function toggleComments is called with the
                //      event and postId as parameters
                toggleComments(event, postId);
            })
        }

        // Return the button elements which were selected
        return buttons;       

    }
    return null;
}


// createComments:
// Depends on the createElemWithText function we created
// Receives JSON comments data as a parameter
const createComments = (jsonCommentsData) => {

    // Returns undefined if not passed a parameter
    if (!jsonCommentsData) return;

    // Creates a fragment element with document.createDocumentFragment()
    const fragment = document.createDocumentFragment();

    // Loop through the comments
    for (const comment of jsonCommentsData) {

        // Create an article element with document.createElement()
        const article = document.createElement('article');

        // Create an h3 element with createElemWithText('h3', comment.name)
        const h3 = createElemWithText('h3', comment.name);

        // Create an paragraph element with createElemWithText('p', comment.body)
        const paragraph1 = createElemWithText('p', comment.body);

        // Create an paragraph element with createElemWithText('p', `From:
        //      ${comment.email}`)
        const paragraph2 = createElemWithText('p', `From: ${comment.email}`);

        // Append the h3 and paragraphs to the article element
        article.append(h3, paragraph1, paragraph2);

        // Append the article element to the fragment
        fragment.append(article);
    }

    // Return the fragment element
    return fragment;
}


// populateSelectMenu:
// Depends on the createSelectOptions function we created
// Receives the users JSON data as a parameter
// Selects the #selectMenu element by id
// Passes the users JSON data to createSelectOptions()
// Receives an array of option elements from createSelectOptions
// Loops through the options elements and appends each option element to the
//      select menu
// Return the selectMenu element


// getUsers
// Fetches users data from: https://jsonplaceholder.typicode.com/ (look at
//      Resources section)
// Should be an async function
// Should utilize a try / catch block
// Uses the fetch API to request all users
// Await the users data response
// Return the JSON data


// getUserPosts
// Receives a user id as a parameter
// Fetches post data for a specific user id from:
//      https://jsonplaceholder.typicode.com/ (look at Routes section)
// Should be an async function
// Should utilize a try / catch block
// Uses the fetch API to request all posts for a specific user id
// Await the users data response
// Return the JSON data


// getUser
// Receives a user id as a parameter
// Fetches data for a specific user id from: https://jsonplaceholder.typicode.com/
//      (look at Routes section)
// Should be an async function
// Should utilize a try / catch block
// Uses the fetch API to request a specific user id
// Await the user data response
// Return the JSON data


// getPostComments
// Receives a post id as a parameter
// Fetches comments for a specific post id from:
//      https://jsonplaceholder.typicode.com/ (look at Routes section)
// Should be an async function
// Should utilize a try / catch block
// Uses the fetch API to request all comments for a specific post id
// Await the users data response
// Return the JSON data


// displayComments
// Dependencies: getPostComments, createComments
// Is an async function
// Receives a postId as a parameter
// Creates a section element with document.createElement()
// Sets an attribute on the section element with section.dataset.postId
// Adds the classes 'comments' and 'hide' to the section element
// Creates a variable comments equal to the result of await
//      getPostComments(postId);
// Creates a variable named fragment equal to createComments(comments)
// Append the fragment to the section
// Return the section element


// createPosts
// Dependencies: createElemWithText, getUser, displayComments
// Is an async function
// Receives posts JSON data as a parameter
// Create a fragment element with document.createDocumentFragment()
// Loops through the posts data
// For each post do the following:
// Create an article element with document.createElement()
// Create an h2 element with the post title
// Create an p element with the post body
// Create another p element with text of `Post ID: ${post.id}`
// Define an author variable equal to the result of await getUser(post.userId)
// Create another p element with text of `Author: ${author.name} with
//      ${author.company.name}`
// Create another p element with the author’s company catch phrase.
// Create a button with the text 'Show Comments'
// Set an attribute on the button with button.dataset.postId = post.id
// Append the h2, paragraphs, button, and section elements you have created to
//      the article element.
// Create a variable named section equal to the result of await
//      displayComments(post.id);
// Append the section element to the article element
// After the loop completes, append the article element to the fragment
// Return the fragment element


// displayPosts
// Dependencies: createPosts, createElemWithText
// Is an async function
// Receives posts data as a parameter
// Selects the main element
// Defines a variable named element that is equal to:
//      IF posts exist: the element returned from await createPosts(posts)
//      IF post data does not exist: create a paragraph element that is identical to
//           the default paragraph found in the html file.
//      Optional suggestion: use a ternary for this conditional
// Appends the element to the main element
// Returns the element variable


// toggleComments
// Dependencies: toggleCommentSection, toggleCommentButton
// Receives 2 parameters: (see addButtonListeners function description)
//      The event from the click event listener is the 1st param
//      Receives a postId as the 2nd parameter
// Sets event.target.listener = true (I need this for testing to be accurate)
// Passes the postId parameter to toggleCommentSection()
// toggleCommentSection result is a section element
// Passes the postId parameter to toggleCommentButton()
// toggleCommentButton result is a button
// Return an array containing the section element returned from
//      toggleCommentSection and the button element returned from
//      toggleCommentButton: [section, button]
function toggleComments (event, postId) {
}


// refreshPosts
// Dependencies: removeButtonListeners, deleteChildElements, displayPosts,
//      addButtonListeners
// Is an async function
// Receives posts JSON data as a parameter
// Call removeButtonListeners
// Result of removeButtonListeners is the buttons returned from this function
// Call deleteChildElements with the main element passed in as the parameter
// Result of deleteChildElements is the return of the main element
// Passes posts JSON data to displayPosts and awaits completion
// Result of displayPosts is a document fragment
// Call addButtonListeners
// Result of addButtonListeners is the buttons returned from this function
// Return an array of the results from the functions called: [removeButtons, main,
//      fragment, addButtons]


// selectMenuChangeEventHandler
// Dependencies: getUserPosts, refreshPosts
// Should be an async function
// Automatically receives the event as a parameter (see cheatsheet)
// Disables the select menu when called into action (disabled property)
// Defines userId = event.target.value || 1; (see cheatsheet)
// Passes the userId parameter to await getUserPosts
// Result is the posts JSON data
// Passes the posts JSON data to await refreshPosts
// Result is the refreshPostsArray
// Enables the select menu after results are received (disabled property)
// Return an array with the userId, posts and the array returned from refreshPosts:
//      [userId, posts, refreshPostsArray]


// initPage
// Dependencies: getUsers, populateSelectMenu
// Should be an async function
// No parameters.
// Call await getUsers
// Result is the users JSON data
// Passes the users JSON data to the populateSelectMenu function
// Result is the select element returned from populateSelectMenu
// Return an array with users JSON data from getUsers and the select element
//      result from populateSelectMenu: [users, select]


// initApp
// Dependencies: initPage, selectMenuChangeEventHandler
// Call the initPage() function.
// Select the #selectMenu element by id
// Add an event listener to the #selectMenu for the “change” event
// The event listener should call selectMenuChangeEventHandler when the change
//      event fires for the #selectMenu
// NOTE: All of the above needs to be correct for you app to function correctly.
// However, I can only test if the initApp function exists. It does not return anything.
// NOTE: There is one last step to get your app to function correctly. I cannot test for this, but you
// must apply it to call the script into action.
// *** This must be underneath the definition of initApp in your file.
// Add an event listener to the document.
// Listen for the “DOMContentLoaded” event.
// Put initApp in the listener as the event handler function.
// This will call initApp after the DOM content has loaded and your app will be started.
