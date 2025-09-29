'use strict';

// Отримуємо елемент .logo
const logo = document.querySelector('.logo');

// Promise1: резолвиться при кліку на .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// Promise2: реджектиться через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Функція для створення повідомлення
function showMessage(text, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = text;
  document.body.appendChild(div);
}

// Обробники для promise1
promise1
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', true);
  });

// Обробники для promise2
promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch((err) => {
    showMessage(err.message, true);
  });
