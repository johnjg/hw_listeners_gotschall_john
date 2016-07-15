var firstHeading = document.getElementById('firstHeading');

firstHeading.addEventListener('click', modifyHTML);

var clickcounter = 0;

function modifyHTML() {
    clickcounter += 1;
    var myElement = document.createElement('p');
    myElement.innerHTML = 'This is click number ' + clickcounter;
    document.getElementsByTagName('body')[0].appendChild(myElement);
}
