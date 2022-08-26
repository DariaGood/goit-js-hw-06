const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl:document.querySelector('#text'),

};

refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.spanEl.getElementsByClassName.fontSize = event.currentTarget.value;
    
}