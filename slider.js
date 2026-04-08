const slider = document.getElementById('slider');
const slides = document.getElementById('slides');

let index = 0;
const total = slides.children.length;

slider.addEventListener('click', () => {
    index++;

    if (index >= total) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 300}px)`;
});