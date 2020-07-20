let res4;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res4 = "You selected 'No possibility of vaccine is there, this is the only chance for survival.'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res4 = "You selected 'Government should increase the taxes from public in order to invest in such programs.'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res4 = "You selected 'We need to have economies of scale in order to reduce cost that will cost lot <br> of vital resources from all around the world.'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res4 = "You selected 'Government should divest all long-term project and invest in this program only: - no investment in infrastructure, defense and technology.'";
    localStorage.setItem('valueLack',res4);
    window.location.assign('next.html');
});