const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    const inputs = section.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            section.classList.add('active');
        });
        input.addEventListener('blur', () => {
            section.classList.remove('active');
        });
    });
});