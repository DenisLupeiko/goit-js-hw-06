const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur);
function onBlur (event) {
    const myInput = event.currentTarget;
    const inputLength = Number(myInput.dataset.length);
    console.log(inputLength);
    if (inputLength === myInput.value.length) {
        myInput.classList.remove("invalid");
    myInput.classList.add("valid");
    }
    else {
        myInput.classList.remove("valid");
        myInput.classList.add("invalid");
    }
}