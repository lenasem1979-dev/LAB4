const tasks = [
    { question: "3 * 4 =", answer: 12 },
    { question: "5 * 2 =", answer: 10 },
    { question: "6 * 3 =", answer: 18 },
    { question: "4 * 4 =", answer: 16 },
    { question: "7 * 2 =", answer: 14 },
    { question: "9 * 1 =", answer: 9 },
    { question: "8 * 3 =", answer: 24 },
    { question: "2 * 7 =", answer: 14 },
    { question: "5 * 5 =", answer: 25 },
    { question: "3 * 3 =", answer: 9 },
];

let current = 0;
let score = 0;
let answered = false;

const scoreDiv = document.querySelector('.score');
const taskDiv = document.querySelector('.task');
const answerInput = document.querySelector('.answer');
const checkBtn = document.querySelector('.check');
const resultDiv = document.querySelector('.result');
const nextBtn = document.querySelector('.next');

function showTask() {
    answered = false;
    resultDiv.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false;
    checkBtn.disabled = false;

    const task = tasks[current];
    taskDiv.textContent = `Завдання ${current+1}: ${task.question}`;
}

checkBtn.addEventListener('click', () => {
    if(answered) return; // тільки одна спроба
    const task = tasks[current];
    const userAnswer = parseInt(answerInput.value);

    if(userAnswer === task.answer) {
        resultDiv.textContent = 'Правильно!';
        score++;
    } else {
        resultDiv.textContent = `Помилка, правильна відповідь: ${task.answer}`;
    }

    scoreDiv.textContent = `Загальний рахунок: ${Math.round((score/(current+1))*100)}% (${score} правильних відповідей з ${current+1})`;

    answered = true;
    answerInput.disabled = true;
    checkBtn.disabled = true;
});

nextBtn.addEventListener('click', () => {
    if(current < tasks.length - 1) {
        current++;
        showTask();
    } else {
        taskDiv.textContent = 'Тест завершено!';
        answerInput.style.display = 'none';
        checkBtn.style.display = 'none';
        nextBtn.disabled = true;
    }
});

// Перший запуск
showTask();