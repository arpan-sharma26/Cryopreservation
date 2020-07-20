let results;
const var1 = document.getElementById('btn2');
var1.addEventListener('click',() => {
    results = 'Natural Selection';
    localStorage.setItem('valueExtra',results);
    window.location.assign('last.html');
});

const var2 = document.getElementById('btn3');
var2.addEventListener('click',() => {
    results = 'Selective Selection';
    localStorage.setItem('valueExtra',results);
    window.location.assign('last.html');
});