const loginButton= document.getElementById('login-button');
const passwordField= document.getElementById('input-password');
const emailField= document.getElementById('input-email');
loginButton.addEventListener('click',function(event){
    let passwordValue= passwordField.value;
    let emailValue= emailField.value;
    if(emailValue=='tanim@gmail.com'&&passwordValue=='tashin'){
        window.location.href= 'deposit.html';
    } else if(emailValue=='' || passwordValue=='tashin'){
        alert('Please enter valid email')
    } else if(emailValue=='tanim@gmail.com' || passwordValue=='' ){
        alert('Please enter valid password')
    } else{
        alert('Please enter valid mail and password');
    }
    emailField.value='';
})
