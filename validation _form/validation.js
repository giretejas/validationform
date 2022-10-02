var nameErr = document.getElementById('nameError');
var addressErr = document.getElementById('addressError');
var emailErr = document.getElementById('emailError');
var password1Err = document.getElementById('passwordError1');
var password2Err = document.getElementById('passwordError2');
var submitErr = document.getElementById('submitError');


function validateName(){
    var name = document.getElementById('name').value;
    if (name.length == 0){
        nameErr.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]/)){
        nameErr.innerHTML = 'Enter Full Name';
        return false;
    }
    nameErr.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateAddress(){
    var address = document.getElementById('address').value;
    var reqLen = 30;
    var lenMessage = reqLen - address.length;

    if (lenMessage > 0){
        addressErr.innerHTML = lenMessage + ' more characters required.'
        return false;
    }
    addressErr.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if (email.length == 0){
        emailErr.innerHTML = 'Email is Required';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailErr.innerHTML = 'Email Invalid';
        return false;
    }
    emailErr.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword1(){
    var password = document.getElementById('password1').value;
    if (password.length == 0){
        password1Err.innerHTML = 'Enter Password';
        return false;
    }
    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        password1Err.innerHTML = 'Enter Minimum eight characters, at least one letter, one number and one special character';
        return false;
    }
    password1Err.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validatePassword2(){
    var password = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;

    if (password2.length == 0){
        password2Err.innerHTML = 'Enter Password';
        return false;
    }
    if (password != password2){
        password2Err.innerHTML='Password Not Matched';
        return false;
    }
    password2Err.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateSubmit(){
    if (validateName() || validateAddress() || validateEmail() || validatePassword1() || validatePassword2() ){
        Email.send({
            SecureToken:"7939fe7e-4472-4881-b243-82e1a15febaa",
            To : 'giretejas3@gmail.com',
            From : document.getElementById('email').value,
            Subject : "New Enquiry Form",
            Body :  "Name: "+ document.getElementById('name')+"<br> Address: "+ document.getElementById('address')
            +"<br> Email: "+document.getElementById('email')+"<br> Password: "+document.getElementById('password1')
            +"<br> Confirmed Password: "+document.getElementById('password2')
        }).then(
          message => alert('Email Sent Successfully')
        );
    }else{
        submitErr.innerHTML = 'Please Enter All Details';
        return false;
    } 
}


