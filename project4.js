const name = document.getElementById("name")
const email = document.getElementById("email")
// const car=document.getElementById("car")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
let validName;
let validEmail;
let validAddress;
let validPhone;

name.addEventListener('blur', () => {
    regex = /^[a-zA-Z]([0-9a-zA-Z\s]){1,20}$/
    str = name.value
    if (regex.test(str)) {
        console.log("name is valid");
        name.classList.remove("is-invalid")
        validName = true

    }
    else {
        console.log("name is in-valid");
        name.classList.add("is-invalid")
        validName = false
    }

})
email.addEventListener('blur', () => {
    regex = /^([a-z_\-\.0-9]+)@([a-z_\-\.0-9]+)\.([a-z]){2,8}$/
    str = email.value
    if (regex.test(str)) {
        console.log("email is valid");
        email.classList.remove("is-invalid")
        validEmail = true

    }
    else {
        console.log("email is in-valid");
        email.classList.add("is-invalid")
        validEmail = false
    }

})
address.addEventListener('blur', () => {
    regex = /^([0-9a-zA-Z,\-\s]+)$/
    str = address.value
    if (regex.test(str)) {
        console.log("address is valid");
        address.classList.remove("is-invalid")
        validAddress = true
    }
    else {
        console.log("address is in-valid");
        address.classList.add("is-invalid")
        validAddress = false
    }

})
phone.addEventListener('blur', () => {
    regex = /^([0-9]){10}$/
    str = phone.value
    if (regex.test(str)) {
        console.log("phone number is valid");
        phone.classList.remove("is-invalid")
        validPhone = true

    }
    else {
        console.log("phone number is in-valid");
        phone.classList.add("is-invalid")
        validPhone = false
    }


})
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {

    console.log('form submitted');

    let success = document.getElementById('success')
    let failure = document.getElementById('failure')

    if (validPhone && validAddress && validName && validEmail) {
        success.classList.add('show')
        $('#failure').hide()
        $('#success').show()
    } else {
        failure.classList.add('show')
        $('#success').hide()
        $('#failure').show()
    }

    e.preventDefault()

})
