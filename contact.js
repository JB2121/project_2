
function contactus(){

    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var message = document.getElementById('message');


    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('message', message.value);
    alert('Thank you for your submission') 
}