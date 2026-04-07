const tasks = [
    { question: "3 * 4 =", options: [11, 12, 16, 17], answer: 12 },
    { question: "5 * 2 =", options: [7, 8, 10, 9], answer: 10 },
    { question: "6 * 3 =", options: [18, 16, 20, 15], answer: 18 },
    { question: "4 * 4 =", options: [12, 16, 15, 14], answer: 16 },
    { question: "7 * 2 =", options: [12, 14, 15, 16], answer: 14 },
    { question: "9 * 1 =", options: [8, 9, 10, 11], answer: 9 },
    { question: "8 * 3 =", options: [24, 23, 26, 25], answer: 24 },
    { question: "2 * 7 =", options: [13, 14, 15, 12], answer: 14 },
    { question: "5 * 5 =", options: [25, 20, 30, 15], answer: 25 },
    { question: "3 * 3 =", options: [6, 9, 8, 7], answer: 9 },
];

let current = 0;
let score = 0;

const scoreDiv = document.querySelector('.score');
const taskDiv = document.querySelector('.task');
const optionsDiv = document.querySelector('.options');
const resultDiv = document.querySelector('.result');
const nextBtn = document.querySelector('.next');

function showTask() {
    resultDiv.textContent = '';
    const task = tasks[current];
    taskDiv.textContent = `Завдання ${current+1}: ${task.question}`;

    optionsDiv.innerHTML = '';
    task.options.forEach(opt => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${opt}`));
        optionsDiv.appendChild(label);

        radio.addEventListener('change', () => {
            if(parseInt(radio.value) === task.answer) {
                resultDiv.textContent = 'Правильно!';
                score++;
            } else {
                resultDiv.textContent = `Неправильно, правильна відповідь: ${task.answer}`;
            }
            scoreDiv.textContent = `Загальний рахунок: ${Math.round((score/(current+1))*100)}% (${score} правильних відповідей з ${current+1})`;
            optionsDiv.querySelectorAll('input').forEach(r => r.disabled = true);
        });
    });
}

nextBtn.addEventListener('click', () => {
    if(current < tasks.length - 1) {
        current++;
        showTask();
    } else {
        taskDiv.textContent = 'Тест завершено!';
        optionsDiv.innerHTML = '';
        nextBtn.disabled = true;
    }
});

// Перший запуск
showTask();