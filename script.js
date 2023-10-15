const email = document.querySelector("#email");
const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const myForm = document.querySelector(".form")
const success = document.querySelector(".success")

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (email.value === "") {
    error.innerText = `* Enter your email`
    setTimeout(() => {
      error.innerText=""
    }, 3000)
  }else{
    success.innerText = `Successfully Subscribed`; 
    email.value = "";
  }
}