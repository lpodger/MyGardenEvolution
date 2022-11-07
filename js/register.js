// - register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;

	// Validate the first name:
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
	
		removeErrorMessage('firstName');
		addCorrectMessage('firstName', 'First Name');
	} else {
		removeCorrectMessage('firstName', 'First Name');
		addErrorMessage('firstName', 'Please enter your first name.');
		error = true;
	}
	
	// Validate the last name:
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		
		removeErrorMessage('lastName');
		addCorrectMessage('lastName', 'Last Name');
	} else {
		removeCorrectMessage('lastName', 'Last Name');
		addErrorMessage('lastName', 'Please enter your last name.');
		error = true;
	}
	
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		
		removeErrorMessage('email');
		addCorrectMessage('email', 'Email Address');
	} else {
		removeCorrectMessage('email', 'Email Address');
		addErrorMessage('email', 'Please enter your email address.');
		error = true;
	}
	
    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.


// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);
};