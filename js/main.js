const btn = document.querySelector('#btn-bar');
const nav = document.querySelector('#nav');
const btnoc = document.querySelector('.ocultar');
const btndep1 = document.querySelector('#desph1');
const btndep2 = document.querySelector('#desph2');
const btndep3 = document.querySelector('#desph3');
const btndep4 = document.querySelector('#desph4');
const deli1 = document.querySelector('#depli1');
const deli2 = document.querySelector('#depli2');
const deli3 = document.querySelector('#depli3');
const deli4 = document.querySelector('#depli4');
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;

flat = false;
flat1 = false;
flat2 = false;
flat3 = false;
flat4 = false;
btnoc.addEventListener('click', () => {
    if (!flat) {
        nav.classList.add("slider");
        btnoc.classList.add("desplegableoc");
        console.log = "nav";
        console.log = "btn";
        flat = true;
        num1 = 1;
    } else {
        nav.classList.remove("slider");
        btnoc.classList.remove("desplegableoc");
        flat = false;
        num1 = 0;
    }
})
btn.addEventListener('click', () => {
    if (!flat) {
        nav.classList.add("slider");
        btnoc.classList.add("desplegableoc");
        console.log = "nav";
        console.log = "btn";
        flat = true;
        num1 = 1;
    } else {
        nav.classList.remove("slider");
        btnoc.classList.remove("desplegableoc");
        flat = false;
        num1 = 0;
    }
})

btndep1.addEventListener('click', () => {
    if (num2 == 1) {
        deli2.classList.remove("desplegableli");
        btndep2.classList.remove("desplegableh2");
        $('.despa2').toggleClass('desplegablea');
        $('.sph22').toggleClass('rotate');
        flat2 = false;
        num2 = 0;
    }
    if (num3 == 1) {
        deli3.classList.remove("desplegableli");
        btndep3.classList.remove("desplegableh2");
        $('.despa3').toggleClass('desplegablea');
        $('.sph23').toggleClass('rotate');
        flat3 = false;
        num3 = 0;
    }
    if (num4 == 1) {
        deli4.classList.remove("desplegableli");
        btndep4.classList.remove("desplegableh2");
        $('.despp4').toggleClass('desplegablea');
        $('.sph24').toggleClass('rotate');
        flat4 = false;
        num4 = 0;
    }
    if (!flat1) {
        deli1.classList.add("desplegableli");
        btndep1.classList.add("desplegableh2");
        $('.despa1').toggleClass('desplegablea');
        $('.sph21').toggleClass('rotate');
        console.log = "deli1";
        console.log = "btndep1";
        flat1 = true;
        num1 = 1;
    } else {
        deli1.classList.remove("desplegableli");
        btndep1.classList.remove("desplegableh2");
        $('.despa1').toggleClass('desplegablea');
        $('.sph21').toggleClass('rotate');
        flat1 = false;
        num1 = 0;
    }
})

btndep2.addEventListener('click', () => {
    if (num1 == 1) {
        deli1.classList.remove("desplegableli");
        btndep1.classList.remove("desplegableh2");
        $('.despa1').toggleClass('desplegablea');
        $('.sph21').toggleClass('rotate');
        flat1 = false;
        num1 = 0;
    }
    if (num3 == 1) {
        deli3.classList.remove("desplegableli");
        btndep3.classList.remove("desplegableh2");
        $('.despa3').toggleClass('desplegablea');
        $('.sph23').toggleClass('rotate');
        flat3 = false;
        num3 = 0;
    }
    if (num4 == 1) {
        deli4.classList.remove("desplegableli");
        btndep4.classList.remove("desplegableh2");
        $('.despp4').toggleClass('desplegablea');
        $('.sph24').toggleClass('rotate');
        flat4 = false;
        num4 = 0;
    }
    if (!flat2) {
        deli2.classList.add("desplegableli");
        btndep2.classList.add("desplegableh2");
        $('.despa2').toggleClass('desplegablea');
        $('.sph22').toggleClass('rotate');
        console.log = "deli2";
        console.log = "btndep2";
        flat2 = true;
        num2 = 1;
    } else {
        deli2.classList.remove("desplegableli");
        btndep2.classList.remove("desplegableh2");
        $('.despa2').toggleClass('desplegablea');
        $('.sph22').toggleClass('rotate');
        flat2 = false;
        num2 = 0;
    }
})

btndep3.addEventListener('click', () => {
    if (num1 == 1) {
        deli1.classList.remove("desplegableli");
        btndep1.classList.remove("desplegableh2");
        $('.despa1').toggleClass('desplegablea');
        $('.sph21').toggleClass('rotate');
        flat1 = false;
        num1 = 0;
    }
    if (num2 == 1) {
        deli2.classList.remove("desplegableli");
        btndep2.classList.remove("desplegableh2");
        $('.despa2').toggleClass('desplegablea');
        $('.sph22').toggleClass('rotate');
        flat2 = false;
        num2 = 0;
    }
    if (num4 == 1) {
        deli4.classList.remove("desplegableli");
        btndep4.classList.remove("desplegableh2");
        $('.despp4').toggleClass('desplegablea');
        $('.sph24').toggleClass('rotate');
        flat4 = false;
        num3 = 0;
    } 
    if (!flat3) {
        deli3.classList.add("desplegableli");
        btndep3.classList.add("desplegableh2");
        $('.despa3').toggleClass('desplegablea');
        $('.sph23').toggleClass('rotate');
        console.log = "deli3";
        console.log = "btndep3";
        flat3 = true;
        num3 = 1;
    } else {
        deli3.classList.remove("desplegableli");
        btndep3.classList.remove("desplegableh2");
        $('.despa3').toggleClass('desplegablea');
        $('.sph23').toggleClass('rotate');
        flat3 = false;
        num3 = 0;
    }
})

btndep4.addEventListener('click', () => {
    if (num1 == 1) {
        deli1.classList.remove("desplegableli");
        btndep1.classList.remove("desplegableh2");
        $('.despa1').toggleClass('desplegablea');
        $('.sph21').toggleClass('rotate');
        flat1 = false;
        num1 = 0;
    }
    if (num2 == 1) {
        deli2.classList.remove("desplegableli");
        btndep2.classList.remove("desplegableh2");
        $('.despa2').toggleClass('desplegablea');
        $('.sph22').toggleClass('rotate');
        flat2 = false;
        num2 = 0;
    }
    if (num3 == 1) {
        deli3.classList.remove("desplegableli");
        btndep3.classList.remove("desplegableh2");
        $('.despa3').toggleClass('desplegablea');
        $('.sph23').toggleClass('rotate');
        flat3 = false;
        num3 = 0;
    }
    if (!flat4) {
        deli4.classList.add("desplegableli");
        btndep4.classList.add("desplegableh2");
        $('.despp4').toggleClass('desplegablea');
        $('.sph24').toggleClass('rotate');
        console.log = "deli4";
        console.log = "btndep4";
        flat4 = true;
        num4 = 1;
    } else {
        deli4.classList.remove("desplegableli");
        btndep4.classList.remove("desplegableh2");
        $('.despp4').toggleClass('desplegablea');
        $('.sph24').toggleClass('rotate');
        flat4 = false;
        num4 = 0;
    }
})