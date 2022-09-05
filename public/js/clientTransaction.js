let transactionButton = document.querySelector('#transaction-button');
let form = document.querySelector('#transaction-form')
let date = document.querySelector('#form-date');
let description = document.querySelector('#form-description');
let amount = document.querySelector('#form-amount');
let type = document.querySelector('#form-type');
let category = document.querySelector('#form-category');
let alerts = document.getElementsByClassName('alert')
let alertMessage = document.getElementsByClassName('alertMessage')


console.log('front page');

//when the form is submitted
form.addEventListener('submit', async e=>{
    e.preventDefault();
    // console.log(description.value);

    //make fetch call to store data into an obj
    let newTransaction = {
        date: date.value,
        description: description.value,
        amount: amount.value,
        type: type.value,
        category: category.value
    }

    console.log(newTransaction);

    try {
        //make api call to add a new transaction into database
        let results = await fetch('http://localhost:3000/api', {
            method: "POST",
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(newTransaction)
        })
        

        alertMessage[0].innerHTML = 'Transaction added'
        alerts[0].classList.toggle('active')
        setTimeout(() => {
            alerts[0].classList.toggle('active')
            alertMessage[0].innerHTML = ''
        }, 2000)

    } catch (error) {
        alertMessage[1].innerHTML = 'Unable to add transaction'
        alerts[1].classList.toggle('active')
        setTimeout(() => {
            alerts[1].classList.toggle('active')
            alertMessage[1].innerHTML = ''
        }, 2000)
    }
    

    date.value = "";
    description.value = "";
    amount.value = "";
    type.value = "";
    category.value = "";
    console.log(results);
   
})