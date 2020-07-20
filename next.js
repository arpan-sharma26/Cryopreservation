let res10;
//let trigger;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res10 = " You Selected 'Having few handful healthy beings alive after hundred years on the cost of mass deaths of others.'.";
    localStorage.setItem('valuenew',res10);
    window.location.assign('extra.html');
    
});


const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res10 = "You selected 'Those who are infected will take care of those who are uninfected for the next 100 years while working on developing vaccine as well.'.";
    localStorage.setItem('valuenew',res10);
    window.location.assign('extra.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res10 = "You Selected 'What is the guarantee that this pandemic will end after 100 years as well? Risking major resources in such plan is a risky task.'.";
    localStorage.setItem('valuenew',res10);
    window.location.assign('extra.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res10 = "You selected'What will happen to the family member if a person has undergone cryopreservation and they have to pay hefty amount for the rest of their lives in order to protect him?'.";
    localStorage.setItem('valuenew',res10);
    window.location.assign('extra.html');
});

