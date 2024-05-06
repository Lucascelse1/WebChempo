"use strict"

const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'service_uz6l58l';
    const templateID = 'template_jcarmjq';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Enviado!');
            form.reset(); 
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
            form.reset(); 
        });
})
