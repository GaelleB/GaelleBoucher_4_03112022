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

const validate = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const birthdayValue = birthday.value.trim();
}