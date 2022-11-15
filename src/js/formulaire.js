// DOM Elements
const form = document.getElementById('form');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantityTournoi = document.getElementById('quantity');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const userCondition = document.getElementById('checkbox1');
const nextEvent = document.getElementById('checkbox2');

// Regex
const regexText = /^[a-zA-Z-\s]{2,}$/;
const regexEmail = /^([a-zA-Z0-9.-_]+)@((?:[a-zA-Z0-9.-_]+.)+)([a-zA-Z]{2,4})/;

form.addEventListener('submit', e => {
    e.preventDefault();

    checkFirstname()
    checkLastname()
    checkEmail()
    checkDate()
    checkQuantityTournoi()
    // checkLocation()
    checkUserConditions()
    checkNextEvent()
    // validate()

    const isFormValid = form.checkValidity()
    if(isFormValid){
        console.log(isFormValid);
        const body = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            quantityTournoi: Number(quantityTournoi.value),
            location: document.querySelector('input[type="radio"]:checked').value,
            userCondition: true,
            nextEvent: nextEvent.checked
        }
        console.log(body);
    }
});

const checkFirstname = () => {
    const firstnameValue = firstname.value.trim();
    firstname.setCustomValidity("")
    if (regexText.test(firstnameValue) === false) {
        firstname.setCustomValidity("Votre prénom doit comporter au minimum 2 lettres et ne doit pas comporter de chiffres ou de caractères spéciaux autre que -")
    }
    firstname.reportValidity()
};
firstname.addEventListener('change', checkFirstname);

const checkLastname = () => {
    const lastnameValue = lastname.value.trim();
    lastname.setCustomValidity("")
    if (regexText.test(lastnameValue) === false) {
        lastname.setCustomValidity("Votre nom doit comporter au minimum 2 lettres et ne doit pas comporter de chiffres ou de caractères spéciaux autre que -")
    }
    lastname.reportValidity()
};
lastname.addEventListener('change', checkLastname);

const checkEmail = () => {
    const emailValue = email.value.trim();
    email.setCustomValidity("")
    if (regexEmail.test(emailValue) === false) {
        email.setCustomValidity("Saisissez une adresse mail valide")
    }
    email.reportValidity()
};
email.addEventListener('change', checkEmail);

const checkDate = () => {
    birthdate.setCustomValidity("")
    birthdate.reportValidity()
};
birthdate.addEventListener('change', checkDate);

const checkQuantityTournoi = () => {
    const quantityValue = parseInt(quantityTournoi.value, 10);
    quantityTournoi.setCustomValidity("")
    if (quantityValue < 0 || quantityValue > 100) {
        quantityTournoi.setCustomValidity("Saisissez une quantité entre 0 et 100")
    }
    quantityTournoi.reportValidity()
};
quantityTournoi.addEventListener('change', checkQuantityTournoi);

// const checkLocation = () => {
//     const locationValue = 'input[type="radio"]:checked';
//     location.setCustomValidity("")
//     if (locationValue.checked === false) {
//         location.setCustomValidity("Veuillez cocher une case")
//     }
//     location.reportValidity()
// };
// location.addEventListener('change', checkLocation);

const checkUserConditions = () => {
    if(userCondition === false){
        return false;
    } else {
        return true;
    }
};
userCondition.addEventListener('change', checkUserConditions);

const checkNextEvent = () => {
    if(nextEvent.checked === true){
        return true;
    } else {
        return false;
    }
};
nextEvent.addEventListener('change', checkNextEvent);

// const validate = () => {
    
// };