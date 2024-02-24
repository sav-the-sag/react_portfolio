import React, { useState } from "react";

// import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Contact() {
    // Create state variables for the fields in the form
    // set the initial values to an empty string
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        // based on the input type, we set the state of either email, username, and message
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // first we check to see if the email is not valid or if the userName is empty. If so, set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
            setErrorMessage("Email or Name is invalid");
            // exit out of this code block if something is wrong so that the user can correct it
            return;
            // then check to see if the message is not valid. If so, set an error message regarding the message.
        }

        if (!setMessage(message)) {
            setErrorMessage(`Message is required.`);
            return;
        }

        // if everything goes according to plan, clear out the input after a successful submission.
        setUserName("");
        setMessage("");
        setEmail("");
    };
}