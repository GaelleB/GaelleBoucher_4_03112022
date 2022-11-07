const form = document.getElementById('form');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const email = document.getElementById('email');
const birthday = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const userCondition = document.getElementById('checkbox1');
const nextEvent = document.getElementById('checkbox2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
});

// firstname.addEventListener('change', () => {
//     textInput(firstname, regexText);
// });

// lastname.addEventListener('change', () => {
//     textInput(lastname, regexText);
// });

function textInput(){
    if (regexText.test(firstname.value) === false) {
        alert("Votre nom doit comporter au minimum 2 lettres et ne doit pas comporter de chiffres ou de caractères spéciaux autre que -")
    }
    else if (regexText.test(lastname.value) === false) {
        alert("Votre prenom doit comporter au minimum 2 lettres et ne doit pas comporter de chiffres ou de caractères spéciaux autre que -")
    }
    else if (regexEmail.test(email.value) === false) {
        alert("Ce format d'email n'est pas valide")
    } 
    else if (regexDate.test(birthday.value) === false) {
        alert("Ce format de date n'est pas valide")
    } 
}

const validate = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const birthdayValue = birthday.value.trim();
};

const regexText = /^[a-zA-Z-\s]{2,}$/;
const regexEmail = /^([a-zA-Z0-9.-_]+)@((?:[a-zA-Z0-9.-_]+.)+)([a-zA-Z]{2,4})/;
const regexDate = /^(\d{4})-(0[1-9]|1[0-2]|[1-9])-([1-9]|0[1-9]|[1-2]\d|3[0-1])$/;