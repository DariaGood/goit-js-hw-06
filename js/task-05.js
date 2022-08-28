const input = document.querySelector('#name-input');
const title = document.querySelector('#name-output');
input.addEventListener('input', newInp);
function newInp(a) {
    title.textContent = a.currentTarget.value;
    if (a.currentTarget.value === " ") {
        title.textContent = "Anonymous"
    }
}