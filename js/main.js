const btn = document.querySelector('#btn-bar');
const nav = document.querySelector('#nav');

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