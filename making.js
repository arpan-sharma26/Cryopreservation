let res3;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res3 = "You selected'Young blood is more active their organs are comparatively better functioning.";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res3 = "You selected'All lives matter does not matter what is the age or creed of the person.";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res3 = "You selected'Time is to think rationally not emotionally, whosoever has ability to purchase the services can undergo.'";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res3 = "You selected'Even the kids have very less chances for the revival, does not mean we are not taking them into consideration.'";
    localStorage.setItem('valueMaking',res3);
    window.location.assign('next.html');
});