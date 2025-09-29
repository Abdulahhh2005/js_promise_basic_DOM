'use strict';

// Чекаємо, поки DOM повністю завантажиться
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    return;
  }

  // --- PROMISE 1 ---
  const promise1 = new Promise((resolve) => {
    // Окремий хендлер, щоб можна було його зняти
    const handleClick = () => {
      resolve();
      logo.removeEventListener('click', handleClick);
    };

    logo.addEventListener('click', handleClick);
  });

  // --- PROMISE 2 ---
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  // --- HELPER: показати повідомлення ---
  function showMessage(text, isError = false) {
    const div = document.createElement('div');

    div.classList.add('message');

    if (isError) {
      div.classList.add('error-message');
    }
    div.textContent = text;
    document.body.appendChild(div);
  }

  // --- HANDLERS ---
  promise1
    .then(() => {
      showMessage('Promise was resolved!');
    })
    .catch(() => {
      showMessage('Promise was rejected!', true);
    });

  promise2
    .then(() => {
      showMessage('Promise was resolved!');
    })
    .catch((err) => {
      showMessage(err.message, true);
    });
});
