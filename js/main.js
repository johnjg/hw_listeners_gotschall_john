var theForm = document.getElementById('contact');

theForm.addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is: ' + document.getElementById('firstname').value);
    console.log('The lastName is: ' + document.getElementById('lastname').value);
    console.log('The email is: ' + document.getElementById('email').value);
    console.log('The message is: ' + document.getElementById('message').value);
});
