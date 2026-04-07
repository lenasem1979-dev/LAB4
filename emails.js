const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const selectedDiv = document.querySelector('.selected-emails');

let selectedEmails = [];

function updateSelectedEmails() {
    selectedDiv.textContent = selectedEmails.join(', ');
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selectedEmails.push(checkbox.value);
        } else {
            selectedEmails = selectedEmails.filter(email => email !== checkbox.value);
        }
        updateSelectedEmails();
    });
});