function validateEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if(!email.checkValidity() || email == ""){
        error.innerHTML = "Oops! Please check your email"
    }
}

function redefineMsg() {
    var error = document.querySelector('#error-email');
    if(error.innerHTML = "Oops! Please check your email"){
        error.innerHTML = "";
    }
}

document.querySelector('form input').oninvalid = function(evt) {  
    
    evt.preventDefault();

    if (!this.validity.valid) {
        var error = document.querySelector('#error-email');
        error.innerHTML = "Oops! Please check your email"
    }
};