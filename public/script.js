document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const message = urlParams.get('message');

    const card = document.querySelector('.card');
    const statusIcon = document.getElementById('statusIcon');
    const statusMessage = document.getElementById('statusMessage');
    const btn = document.getElementById('btn');

    if (status === 'success') {
        statusIcon.innerHTML = '✔';
        statusMessage.textContent = message;
        card.classList.add('success');
        statusIcon.classList.add('success');
        statusMessage.classList.add('success');
        btn.classList.add('showBtn');
    } else if (status === 'error') {
        statusIcon.innerHTML = '❌';
        statusMessage.textContent = message;
        card.classList.add('error');
        statusIcon.classList.add('error');
        statusMessage.classList.add('error');
        btn.classList.add('hideBtn');
    } else {
        statusIcon.innerHTML = '?';
    }
});