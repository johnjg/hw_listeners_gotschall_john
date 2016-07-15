/*
document.getElementById('contact').addEventListener('submit', myListener);

function myListener() {
    console.log('The form was submitted');
}
*/

var theForm = document.getElementById('contact');

theForm.addEventListener('submit', function (eventInfo) {
    eventInfo.preventDefault();
    console.log(eventInfo);
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>Interupt form submission</p>';
    document.getElementsByClassName('container')[0].appendChild(myElement);
});
