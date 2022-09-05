let alerts = document.getElementsByClassName('alert')
let alertMessage = document.getElementsByClassName('alertMessage')

alertMessage[0].innerHTML = 'Error submitting alert'
alerts[0].classList.toggle('active')
setTimeout(() => {
    alerts[0].classList.toggle('active')
    alertMessage[0].innerHTML = ''
}, 2000)