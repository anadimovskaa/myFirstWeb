document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const messageDiv = document.getElementById('message');

    noButton.addEventListener('mouseover', () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    yesButton.addEventListener('click', () => {
        messageDiv.style.display = 'block';
        messageDiv.innerText = 'I LOVE YOU TOO!';
    });
});
