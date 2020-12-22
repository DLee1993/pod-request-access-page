const email = document.getElementById("email-input"); 
const form = document.getElementById("request-form"); 
const error = document.getElementById("error-message"); 


form.addEventListener("submit", (e) => {
    if(email.value === '' || email.value === null){
        e.preventDefault(); 
        error.style.display = "block"; 
    }
})