// DOM Elements
const form = document.getElementById('form');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantityTournoi = document.getElementById('quantity');
const locationInput = document.querySelectorAll('input[type="radio"]');
const userCondition = document.getElementById('checkbox1');
const nextEvent = document.getElementById('checkbox2');

// Regex
const regexText = /^[a-zA-Z-\s]{2,}$/;
const regexEmail = /^([a-zA-Z0-9.-_]+)@((?:[a-zA-Z0-9.-_]+.)+)([a-zA-Z]{2,4})/;

form.addEventListener('submit', e => {
    e.preventDefault();

    checkFirstname();
    checkLastname();
    checkEmail();
    checkDate();
    checkQuantityTournoi();
    checkLocation();
    checkUserConditions();
    validate();
});

const handleAttributes = (input) => {
    const inputParent = input.parentElement;
    const isInputValid = input.checkValidity();
    if (isInputValid) {
        inputParent.setAttribute("data-error-visible", "false");
    } else {
        inputParent.setAttribute("data-error-visible", "true");
    }
};

const handleAttributesRadio = (inputs) => {
    inputs.forEach(input => {
        const inputParent = input.parentElement;
        const isInputValid = input.checkValidity();
        if (isInputValid) {
            inputParent.setAttribute("data-error-visible", "false");
        } else {
            inputParent.setAttribute("data-error-visible", "true");
        }
    });
};

const checkFirstname = () => {
    const firstnameValue = firstname.value.trim();
    firstname.setCustomValidity("");
    if (regexText.test(firstnameValue) === false) {
        firstname.setCustomValidity("Veuillez entrer 2 caractères ou plus dans le champ du prénom");
    }
    handleAttributes(firstname);
};
firstname.addEventListener('change', checkFirstname);

const checkLastname = () => {
    const lastnameValue = lastname.value.trim();
    lastname.setCustomValidity("");
    if (regexText.test(lastnameValue) === false) {
        lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus dans le champ du nom");
    }
    handleAttributes(lastname);
};
lastname.addEventListener('change', checkLastname);

const checkEmail = () => {
    const emailValue = email.value.trim();
    email.setCustomValidity("");
    if (regexEmail.test(emailValue) === false) {
        email.setCustomValidity("Veuillez entrer une adresse mail valide");
    }
    handleAttributes(email);
};
email.addEventListener('change', checkEmail);

const checkDate = () => {
    birthdate.setCustomValidity("");
    birthdate.reportValidity();
};
birthdate.addEventListener('change', checkDate);

const checkQuantityTournoi = () => {
    const quantityValue = parseInt(quantityTournoi.value, 10);
    quantityTournoi.setCustomValidity("");
    if (quantityValue < 0 || quantityValue > 100) {
        quantityTournoi.setCustomValidity("Veuillez entrer une quantité entre 0 et 100");
    }
    handleAttributes(quantityTournoi);
};
quantityTournoi.addEventListener('change', checkQuantityTournoi);

const checkLocation = () => {
    const isAnythingChecked = document.querySelector('input[type="radio"]:checked');
    if (isAnythingChecked) {
        locationInput.forEach(input => {
            input.setCustomValidity("");
        });
    } else {
        locationInput.forEach(input => {
            input.setCustomValidity("error");
        });
    }
    handleAttributesRadio(locationInput);
};
locationInput.forEach(location => {
    location.addEventListener('change', checkLocation);
});

const checkUserConditions = () => {
    userCondition.setCustomValidity("");
    if (userCondition.checked === false) {
        userCondition.setCustomValidity("error");
    }
    handleAttributes(userCondition);
};
userCondition.addEventListener('change', checkUserConditions);

const checkNextEvent = () => {
    if (nextEvent.checked === true) {
        return true;
    } else {
        return false;
    }
};
nextEvent.addEventListener('change', checkNextEvent);

const validate = () => {
    const isFormValid = form.checkValidity();
    if (isFormValid) {
        console.log(isFormValid);
        const body = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            quantityTournoi: Number(quantityTournoi.value),
            location: document.querySelector('input[type="radio"]:checked').value,
            userCondition: true,
            nextEvent: nextEvent.checked
        };
        console.log(body);

        // code pour afficher le message de confirmation
    }
};