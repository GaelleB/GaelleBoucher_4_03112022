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
const regexDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

// Ecoute du formulaire de soumission
form.addEventListener('submit', e => {
    e.preventDefault();

    checkFirstname();
    checkLastname();
    checkEmail();
    // checkDate();
    checkQuantityTournoi();
    checkLocation();
    checkUserConditions();
    validate();
});

// Fonction gestion des attributs data-error
const handleAttributes = (input) => {
    const inputParent = input.parentElement;
    const isInputValid = input.checkValidity();
    if (isInputValid) {
        inputParent.setAttribute("data-error-visible", "false");
    } else {
        inputParent.setAttribute("data-error-visible", "true");
    }
};

// Fonction gestion des attributs data-error des boutons radio
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

//  Fonction prénom
const checkFirstname = () => {
    const firstnameValue = firstname.value.trim();
    firstname.setCustomValidity("");
    if (regexText.test(firstnameValue) === false) {
        firstname.setCustomValidity("Veuillez entrer 2 caractères ou plus dans le champ du prénom");
    }
    handleAttributes(firstname);
};
firstname.addEventListener('change', checkFirstname);

//  Fonction nom
const checkLastname = () => {
    const lastnameValue = lastname.value.trim();
    lastname.setCustomValidity("");
    if (regexText.test(lastnameValue) === false) {
        lastname.setCustomValidity("Veuillez entrer 2 caractères ou plus dans le champ du nom");
    }
    handleAttributes(lastname);
};
lastname.addEventListener('change', checkLastname);

//  Fonction email
const checkEmail = () => {
    const emailValue = email.value.trim();
    email.setCustomValidity("");
    if (regexEmail.test(emailValue) === false) {
        email.setCustomValidity("Veuillez entrer une adresse mail valide");
    }
    handleAttributes(email);
};
email.addEventListener('change', checkEmail);

//  Fonction date de naissance
// const checkDate = () => {
//     const birthdateValue = birthdate.value;
//     birthdate.setCustomValidity("");
//     if (regexDate.test(birthdateValue) === false) {
//         birthdate.setCustomValidity("Veuillez entrer une date");
//     }
//     handleAttributes(birthdate);
// };
// birthdate.addEventListener('change', checkDate);

//  Fonction quantité des tournois
const checkQuantityTournoi = () => {
    const quantityValue = parseInt(quantityTournoi.value, 10);
    quantityTournoi.setCustomValidity("");
    if (quantityValue < 0 || quantityValue > 100) {
        quantityTournoi.setCustomValidity("Veuillez entrer une quantité entre 0 et 100");
    }
    handleAttributes(quantityTournoi);
};
quantityTournoi.addEventListener('change', checkQuantityTournoi);

//  Fonction boutons radio (ville à sélectionner)
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

//  Fonction condition d'utilisateur
const checkUserConditions = () => {
    userCondition.setCustomValidity("");
    if (userCondition.checked === false) {
        userCondition.setCustomValidity("error");
    }
    handleAttributes(userCondition);
};
userCondition.addEventListener('change', checkUserConditions);

//  Fonction newsletter
const checkNextEvent = () => {
    if (nextEvent.checked === true) {
        return true;
    } else {
        return false;
    }
};
nextEvent.addEventListener('change', checkNextEvent);

//  Fonction validate
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
        launchConfirmationModal()
    }
};

//  Fonction pour afficher la fenêtre de confirmation
const launchConfirmationModal = () => {
	modalConfirmation.style.display = "block";
	console.log('Formulaire envoyé');
};
