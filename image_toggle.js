const img = document.getElementById('image');
const btn = document.getElementById('btn');

let isBig = false;

btn.addEventListener('click', () => {
    if (!isBig) {
        img.style.width = '400px';
        img.style.height = '400px';
    } else {
        img.style.width = '200px';
        img.style.height = '200px';
    }
    isBig = !isBig;
});