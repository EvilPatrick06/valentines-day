const audio = document.querySelector('audio');
document.addEventListener('click', () => {
    audio.play();
}, { once: true });

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 3000);

const yesBtn = document.getElementById('yes-button');
const noBtn = document.getElementById('no-button');
const message = document.getElementById('message');
const messagesecret = document.getElementById('messagesecret');
let yesFontSize = 18;
let noClicks = 0;

noBtn.addEventListener('click', () => {
    noClicks++;
    yesFontSize += 8;
    yesBtn.style.fontSize = yesFontSize + 'px';
    yesBtn.style.padding = (12+ yesFontSize * 0.3) + 'px ' + (32 + yesFontSize * 0.5) + 'px';
    if (noClicks >= 6) {
        yesBtn.textContent = 'It\'s a yes AND you know it! See!';
        messagesecret.classList.remove('hiddensecret');
        noBtn.style.display = 'none';
        launchConfetti();
    } else if (noClicks >= 5) {
        yesBtn.textContent = 'I CAN\'T BELIEVE YOU\'RE STILL SAYING NO! JUST SAY YES!';
    } else if (noClicks >= 4) {
        yesBtn.textContent = 'I SAID YES, PLEASE!';
    } else if (noClicks >= 3) { 
        yesBtn.textContent = 'SAY YES AND MAKE ME HAPPY';
    } else if (noClicks >= 2) {
        yesBtn.textContent = 'PLEASE SAY YES';
    } else if (noClicks >= 1) {
        yesBtn.textContent = 'YES';
    }
});

yesBtn.addEventListener('click', () => {
    message.classList.remove('hidden');
    noBtn.style.display = 'none';
    launchConfetti();
});

function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = ['#ff69b4', '#ff1493', '#ffffff', '#ff0000', '#ffb6c1'][Math.floor(Math.random() * 5)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
    }
}