const correctPassword = "TrustNo1";
const passwordField = document.querySelector('.input-pass')
const okButton = document.querySelector('.ok-btn');
const checkBoxesButton = document.querySelectorAll('.check-btn');
const rangesButton = document.querySelectorAll('.range-btn');
const launchButton = document.querySelector('.launch-btn');
let rocket = document.querySelector('.rocket');
let style = getComputedStyle(rocket);

function disable(){
    checkBoxesButton.forEach(button => {
        button.setAttribute("disabled", 'true')
    });
    rangesButton.forEach(button =>{
        button.setAttribute("disabled","true");
    });
    launchButton.setAttribute("disabled","true");
}

function check(){
    console.log("aschi");
    let checkBox=true;
    let range = true;
    checkBoxesButton.forEach(button =>{
        if(!button.checked){
            checkBox = false;
        }
    });
    rangesButton.forEach(button =>{
        if(button.value<100)
            range = false;
    });
    if (checkBox && range){
        launchButton.removeAttribute("disabled");
    }
}

function enable(){
    checkBoxesButton.forEach(button => {
        button.removeAttribute("disabled")
    });
    rangesButton.forEach(button =>{
        button.removeAttribute("disabled");
    });
    passwordField.setAttribute("disabled","true");
    okButton.setAttribute("disabled","true");
}

function checkPassword(){
    let password=document.querySelector('.input-pass').value;
    //console.log(password)
    if(password === correctPassword){
        enable();
    }
    else {
        console.log("incorrect password");
    }
}



function fly(){
    setTimeout( function() {
        rocket.style.left = '350px';
        rocket.style.bottom = '200px';
    }, 1000);
    setTimeout( function() {
        rocket.style.left = '500px';
        rocket.style.bottom = '350px';
    }, 2000);
    setTimeout( function() {
        rocket.style.left = '700px';
        rocket.style.bottom = '550px';
    }, 4000);
    setTimeout( function() {
        rocket.style.left = '900px';
        rocket.style.bottom = '600px';
        rocket.style.transform = 'rotate(75deg)';
    }, 5000);
    setTimeout( function() {
        rocket.style.left = '1350px';
        rocket.style.bottom = '600px';
    }, 6000);
    setTimeout( function() {
        rocket.style.left = '50px';
        rocket.style.bottom = '600px';
    }, 7000);
    setTimeout( function() {
        rocket.style.left = '300px';
        rocket.style.bottom = '550px';
    }, 8000);
    setTimeout( function() {
        rocket.style.left = '750px';
        rocket.style.bottom = '450px';
    }, 9000);
    setTimeout( function() {
        rocket.style.left = '1250px';
        rocket.style.bottom = '400px';
    }, 10000);
}



function controls(){
    //console.log("hello");
    disable();
    okButton.addEventListener('click',function (){
        checkPassword();
    });
    launchButton.addEventListener('click',function (){
        fly();
    });
}

controls();