// The following code targets the contact form and listens for the submit event, interrupts the form's default submit function, and generates an HTML message that encorporates the form field input.

var theForm = document.getElementById('contact');

theForm.addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    var myElement = document.createElement('article');
    myElement.innerHTML = '<h1>What have you done?!?!?!</h1><p>You submitted ' + document.getElementById('inputvalue').value + ' even though I told you NOT to do it!!!</p>';
    document.getElementsByClassName('container')[0].appendChild(myElement);
});

// The following code targets the hyperlink and listens for the click event, interrupts the link's default function, and changes the content of the header H1 element.

var theLink = document.getElementById('link');

theLink.addEventListener('click', function (clickEvent) {
    clickEvent.preventDefault();
    var newHeader = document.getElementById('header');
    newHeader.innerHTML = 'I told you not to click the link! Now you messed up my header!';
});
