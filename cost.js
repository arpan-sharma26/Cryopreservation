let res2;

const BtnTwo = document.getElementById('btn2');
BtnTwo.addEventListener('click',() => {
    res2 = "You selected 'Body will be under temperature-controlled pod running on continuous power and methane.'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});

const BtnThree = document.getElementById('btn3');
BtnThree.addEventListener('click',() => {
    res2 = "You selected 'Despite of low success rate it is the only feasible option left.'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});

const BtnFour = document.getElementById('btn4');
BtnFour.addEventListener('click',() => {
    res2 = "You selected 'Very few cases will have possibility of complete brain dead.'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});

const BtnFive = document.getElementById('btn5');
BtnFive.addEventListener('click',() => {
    res2 = "You selected 'Even when the human organs will stop working theoretically brain will still remain active pulling you into a never-ending limbo.'";
    localStorage.setItem('valueCost',res2);
    window.location.assign('next.html');
});