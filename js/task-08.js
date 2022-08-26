const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

   function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    console.dir(formElements);

    const email = formElements.email;
    const password = formElements.password;

    if(email.value === "" || password.value === "") {
        return alert('заполни форму');
    }
   
    console.log({email: email.value, password: password.value});
   }
