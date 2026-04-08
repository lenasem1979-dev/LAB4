const block = document.getElementById('block');

const widthRange = document.getElementById('widthRange');
const heightRange = document.getElementById('heightRange');
const rotateRange = document.getElementById('rotateRange');

const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');
const rotateValue = document.getElementById('rotateValue');

widthRange.addEventListener('input', () => {
    block.style.width = widthRange.value + 'px';
    widthValue.textContent = widthRange.value;
});

heightRange.addEventListener('input', () => {
    block.style.height = heightRange.value + 'px';
    heightValue.textContent = heightRange.value;
});

rotateRange.addEventListener('input', () => {
    block.style.transform = `rotate(${rotateRange.value}deg)`;
    rotateValue.textContent = rotateRange.value;
});