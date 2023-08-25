const errorIcon= document.getElementById("error-icon");
const errorMsg=document.getElementById("error-msg");
const emailInput = document.getElementById("emailfield");
const submitBtn= document.getElementById("arrowbutt");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", function(){
    if(emailInput.value.length === 0 || !emailInput.value.match(emailValidation)){
        errorMsg.textContent="Please provide a valid email address";
        errorMsg.style.color= "red";
        errorIcon.style.display = "block";
    }
    else {
    errorMsg.style.display = "block";
    errorMsg.style.color = "green";
    errorIcon.style.display = "none";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
  }
});