
// This grabs the form element on the page so we can listen for when it's submitted
const form = document.querySelector('form');

//This creates a submit event that allows the form to be submitted
form.addEventListener('submit', (e) => {
    e.preventDefault(); //This suppress the default action of reloading the page (which happened normally when a form is submitted)

    // This allows the text typed by the user into the input field
    text = e.target.guestNameInput.value.trim();

    // This defines the rules for a valid guest name (only letters, spaces, hyphens only, 2-50 characters)
    const nameValidStandard = /^[A-Za-z\s\-]{2,50}$/;

    // If nothing was typed, nothing should be done
    if (!text) {
        return;
    } 
    // Else if guest name passes the validation check, the list item is to be built 
    else if (nameValidStandard.test(text)) {
        buildGuestList(text); // This add the guest name to the visible list
    } 
    // However, if the guest name does not pass, an alert is prompted
    else {
        alert('Please enter a valid name (letters, spaces, hyphens only, 2-50 characters)');
    }
    // Clears the input field after submission
    form.reset();
})

// This function allows a new guest item to be built and added to the list on the page
function buildGuestList(guestname) {
    // Creates a new list item--one row--in the guest list
    let li = document.createElement('li');
    li.classList.add('guest-item'); // Adds a className to 'li' for styling

    // Creates a text that represents the guest's name
    let spanName = document.createElement('span');
    spanName.textContent = guestname;

    // Creates a "Delete" button that removes the guest from the list
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    console.log(deleteButton)
    deleteButton.addEventListener('click', deleteGuestName) // Links it to the delete function
    
    // Creates an "Edit" button that allows changing the guest's name
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', () => editGuestName(spanName)) // Links it to the edit function
    

    // Creates an "RSVP" button that marks if a guest is attending or not
    let rsvpButton = document.createElement('button');
    rsvpButton.textContent = "Attending"; // Default state
    rsvpButton.className = 'rsvp';
    rsvpButton.addEventListener('click', () => toggleRSVP(li, rsvpButton)); // Toggles attending state


    // Add all the parts of the name and the buttons to the list item
    li.append(spanName);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    li.append(rsvpButton);

    // Adds the full guest item to the visible guest list on the page (completing the function)
    document.querySelector('.guest-list').appendChild(li)
}

// This function removes the guest from the list when "Delete" is clicked
function deleteGuestName(e) {
    e.target.parentNode.remove(); // Removes the list item that the button is part 
}

//This function allows the user to edit the guest's name
function editGuestName(spanName) {
    // Prompts the user for a new name with a pop-up input box
    let newGuestName = prompt('Enter the new guest name', spanName.textContent);
    if (!newGuestName) return; // If nothing is typed, nothing is to be done

    newGuestName = newGuestName.trim(); // Clean up spaces
    const nameValidStandard = /^[A-Za-z\s\-]{2,50}$/; // The same rules as before

    // If the new name is valid, the guest's name is updated 
    if (nameValidStandard.test(newGuestName)) {
        spanName.textContent = newGuestName
    } 
    // Otherwise, the user is alerted
    else {
        alert('Please enter a valid name (letters, spaces, hyphens only, 2-50 characters)');
    }
}

// This function allows the user to switch the RSVP status between "Atending" and "Not Attending"
function toggleRSVP(li, button) {
    const isAttending = li.classList.toggle('attending'); // Toggles a special className to indicate the guest's status
    button.textContent = isAttending ? 'Not Attending' : 'Attending'; // Updates button text
}

