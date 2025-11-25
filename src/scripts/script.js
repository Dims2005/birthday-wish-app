// src/scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    const messageContainer = document.getElementById('birthday-message');
    const surpriseButton = document.getElementById('surprise-button');

    const messages = [
        "Selamat Ulang Tahun! Semoga harimu seindah senyummu!",
        "Hari ini adalah hari spesialmu! Nikmati setiap detiknya!",
        "Semoga semua impianmu menjadi kenyataan di tahun ini!",
        "Kamu adalah bintang di hari ini! Bersinar selalu!",
        "Selamat ulang tahun! Mari kita buat kenangan indah bersama!"
    ];

    surpriseButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        const selectedMessage = messages[randomIndex];
        messageContainer.textContent = selectedMessage;
        messageContainer.classList.add('fade-in');

        setTimeout(() => {
            messageContainer.classList.remove('fade-in');
        }, 3000);
    });
});

function unlockSurprise() {
    const lockedBox = document.querySelector('.locked-box');
    const surpriseContent = document.querySelector('.surprise-content');
    
    // Sembunyikan locked box
    lockedBox.style.display = 'none';
    
    // Tampilkan surprise content
    surpriseContent.classList.remove('hidden');
    
    // Buat confetti effect
    createConfetti();
}

function resetSurprise() {
    const lockedBox = document.querySelector('.locked-box');
    const surpriseContent = document.querySelector('.surprise-content');
    
    // Tampilkan locked box
    lockedBox.style.display = 'block';
    
    // Sembunyikan surprise content
    surpriseContent.classList.add('hidden');
    
    // Scroll ke atas
    window.scrollTo(0, 0);
}

function flipCard(element) {
    const flipCardInner = element.querySelector('.flip-card-inner');
    flipCardInner.style.transform = flipCardInner.style.transform === 'rotateY(180deg)' 
        ? 'rotateY(0deg)' 
        : 'rotateY(180deg)';
}

function createConfetti() {
    const confettiPieces = 80;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '12px';
        confetti.style.height = '12px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        confetti.style.boxShadow = '0 0 10px ' + confetti.style.backgroundColor;
        
        document.body.appendChild(confetti);
        
        animateConfetti(confetti);
    }
}

function animateConfetti(confetti) {
    let top = -20;
    let left = parseFloat(confetti.style.left);
    const speed = Math.random() * 5 + 3;
    const sway = (Math.random() - 0.5) * 8;
    const rotation = Math.random() * 360;
    let currentRotation = 0;
    
    const interval = setInterval(() => {
        top += speed;
        left += sway;
        currentRotation += rotation;
        
        confetti.style.top = top + 'px';
        confetti.style.left = left + 'px';
        confetti.style.transform = 'rotate(' + currentRotation + 'deg)';
        confetti.style.opacity = 1 - (top / window.innerHeight);
        
        if (top > window.innerHeight) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 20);
}

function getRandomColor() {
    const colors = [
        '#f093fb',
        '#f5576c',
        '#ff6b9d',
        '#667eea',
        '#764ba2',
        '#23a6d5',
        '#23d5ab',
        '#ffd700',
        '#ff1493',
        '#00ff00',
        '#00ffff'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}