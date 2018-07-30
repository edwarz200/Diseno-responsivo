const btn = document.querySelector('#btn-bar');
const nav = document.querySelector('#nav');
const btndep1 = document.querySelector('#desph21');
const btndep2 = document.querySelector('#desph22');
const btndep3 = document.querySelector('#desph23');
const btndep4 = document.querySelector('#desph24');
const dea1 = document.querySelector('#despa1');
const dea2 = document.querySelector('#despa2');
const dea3 = document.querySelector('#despa3');
const dea4 = document.querySelector('#despa4');
const dep1 = document.querySelector('#despp1');
const dep2 = document.querySelector('#despp2');
const dep3 = document.querySelector('#despp3');
const dep4 = document.querySelector('#despp4');
const deli1 = document.querySelector('#depli1');
const deli2 = document.querySelector('#depli2');
const deli3 = document.querySelector('#depli3');
const deli4 = document.querySelector('#depli4');


flat = false;

btn.addEventListener('click', () => {
    if (!flat) {
        nav.classList.add("slider");
        console.log = "nav";
        console.log = "btn";
        flat = true;
    } else {
        nav.classList.remove("slider"); 
        flat = false;
    }
})

btndep1.addEventListener('click', () => {
    if (!flat) {
        dea1.classList.add("desplegablea");
        deli1.classList.add("desplegableli");
        console.log = "nav";
        console.log = "btn";
        flat = true;
    } else {
        dea1.classList.remove("desplegablea");
        deli1.classList.remove("desplegableli");
        flat = false;
    }
})

btndep2.addEventListener('click', () => {
    if (!flat) {
        dea2.classList.add("desplegablea");
        deli2.classList.add("desplegableli");
        console.log = "nav";
        console.log = "btn";
        flat = true;
    } else {
        dea2.classList.remove("desplegablea");
        deli2.classList.remove("desplegableli");
        flat = false;
    }
})

btndep3.addEventListener('click', () => {
    if (!flat) {
        dea3.classList.add("desplegablea");
        deli3.classList.add("desplegableli");
        console.log = "nav";
        console.log = "btn";
        flat = true;
    } else {
        dea3.classList.remove("desplegablea");
        deli3.classList.remove("desplegableli");
        flat = false;
    }
})

btndep4.addEventListener('click', () => {
    if (!flat) {
        dep4.classList.add("desplegablea");
        deli4.classList.add("desplegableli");
        console.log = "nav";
        console.log = "btn";
        flat = true;
    } else {
        dep4.classList.remove("desplegablea");
        deli4.classList.remove("desplegableli");
        flat = false;
    }
})