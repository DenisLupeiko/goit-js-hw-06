const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', changeText);
function changeText(event) {
    text.style.fontSize = `${event.target.value}px`;
}