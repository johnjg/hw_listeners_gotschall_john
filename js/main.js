// The following code targets the contact form, interrupts the form's default submit function, and generates an HTML message that encorporates the form field input.

var theForm = document.getElementById('contact');

theForm.addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    var myElement = document.createElement('article');
    myElement.innerHTML = '<h1>What have you done?!?!?!</h1><p>You submitted ' + document.getElementById('inputvalue').value + ' even though I told you NOT to do it!!!</p>';
    document.getElementsByClassName('container')[0].appendChild(myElement);
});
