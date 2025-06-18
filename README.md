# Event-Guest-List-Manager

A simple web application that manages your event list with JavaScript.
It demostrates core concepts of: 
- DOM manipulation, 
- form handling, and 
- dynamic UI updates without refreshing the browser.


## Features

This application enables the user:

- To type a guest's name into the input field

- To click a submit button to add the guest

- To see the guest's name appear in a list on the page after I submit the form

- To remove a guest from the list using a delete button

- With the option of a "Delete" button for each guest

- To mark whether a guest(s) as "Attending" or "Not Attending" with a "Toggle RSVP" feature

- To update a guest's name with an "Edit" button

## File Structure
w2-Code-Challenge/
├── index.html # The main HTML structure
├── style.css # Styles for layout and elements
└── src/
└── index.js # Core JavaScript logic


## How It Works

 1. Users type a name into the input field and press "Submit".
 2. Valid names are added to the guest list as list items.
 3. Each guest item comes with:
   - ✅ RSVP toggle button (Attending / Not Attending)
   - ✏️ Edit button to update name
   - ❌ Delete button to remove guest


## 📝 Validation Rules

- Guest names must be between 2 and 50 characters.
- Allowed characters: Letters (`A–Z`), spaces, and hyphens (`-`).


## ▶️ How To Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/guest-list-manager.git

2. Open index.html in your browser with:
    ```explorer.exe index.html

#License





