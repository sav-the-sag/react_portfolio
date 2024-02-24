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

}