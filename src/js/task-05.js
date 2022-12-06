const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', newInput => {
    event.currentTarget.value === `` ?
        span.textContent = "Anonymous" :
        span.textContent = event.currentTarget.value;
}
)