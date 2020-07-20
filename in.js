let res5;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res5 = "You selected'Having a Standby team in order to take care of the body temperature and vitals of the human body.'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res5 = "You selected'Keeping antifreeze solution used in organ preservation during transplants in order to control any case of emergency.'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res5 = "You Selected'Having an expert of Cloning and prosthetics around in order to replace or remove frozen-dead organs.'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res5 = "You selected'Backup power source for the next 100 years.'";
    localStorage.setItem('valueIn',res5);
    window.location.assign('next.html');
});