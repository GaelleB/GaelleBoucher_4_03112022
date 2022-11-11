// DOM Elements
const form = document.getElementById('form');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
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

    const isFormValid = form.checkValidity()
    if(isFormValid){
        console.log()
    }
    console.log(isFormValid)
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

const checkQuantity = () => {
    const quantityValue = quantity.parseInt(Number);
    quantity.setCustomValidity("")
    if (quantityValue < 0 || quantityValue > 100) {
        quantity.setCustomValidity("Saisissez une quantité entre 0 et 100")
    }
    quantity.reportValidity()
};
quantity.addEventListener('change', checkQuantity);