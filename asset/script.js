'use strict'

// setup for email form
const labelAddress = document.querySelector('label[for=address]')
const inputAddress = document.getElementById('address')

inputAddress.onclick = function () {
    alert('Kamu tidak perlu memasukkan email mu.')
    inputAddress.value = 'email@gmail.com'
}

// setup for password form
const password = document.getElementById('password')
const eyePassword = document.getElementById('eye')

eyePassword.onclick = function () {
    if (password.type === 'password') {
        password.type = 'text'
        eyePassword.setAttribute('src', 'asset/img/hidden.png')
    } else {
        password.type = 'password'
        eyePassword.setAttribute('src', 'asset/img/view.png')
    }
}