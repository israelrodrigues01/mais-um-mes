document.addEventListener('DOMContentLoaded', function () {


    // Mostrar modal de confirmação ao carregar a página
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'flex';

    // Configurar botões
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const envelope = document.getElementById('envelope');

    // Botão SIM
    yesButton.addEventListener('click', function () {
        confirmationModal.style.display = 'none';
        envelope.style.cursor = 'pointer';
        envelope.addEventListener('click', openLetter);
    });

    // Botão NÃO (foge do mouse)
    noButton.addEventListener('click', function () {
        moveButtonRandomly(noButton);
    });

    // Criar alguns corações iniciais
    for (let i = 0; i < 10; i++) {
        setTimeout(createHearts, i * 300);
    }
});

function createCapybaras() {
    const capybarasSVGs = [
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><path d="M20,30 Q30,10 50,20 Q70,10 80,30 Q90,40 85,50 Q80,55 70,50 Q60,55 50,50 Q40,55 30,50 Q20,55 15,50 Q10,40 20,30" fill="%23655300"/><circle cx="35" cy="25" r="5" fill="%23655300"/><circle cx="65" cy="25" r="5" fill="%23655300"/><circle cx="35" cy="25" r="2" fill="%23fff"/><circle cx="65" cy="25" r="2" fill="%23fff"/><circle cx="34" cy="24" r="1" fill="%23000"/><circle cx="64" cy="24" r="1" fill="%23000"/><path d="M40,35 Q50,40 60,35" stroke="%23655300" fill="transparent" stroke-width="2"/></svg>',
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60"><path d="M15,35 Q25,15 50,25 Q75,15 85,35 Q95,45 85,55 Q75,60 65,55 Q55,60 45,55 Q35,60 25,55 Q15,60 10,50 Q5,45 15,35" fill="%238B6B3D"/><circle cx="35" cy="25" r="6" fill="%238B6B3D"/><circle cx="65" cy="25" r="6" fill="%238B6B3D"/><circle cx="35" cy="25" r="3" fill="%23fff"/><circle cx="65" cy="25" r="3" fill="%23fff"/><circle cx="34" cy="24" r="1.5" fill="%23000"/><circle cx="64" cy="24" r="1.5" fill="%23000"/><path d="M40,38 Q50,45 60,38" stroke="%238B6B3D" fill="transparent" stroke-width="2"/><rect x="45" cy="50" width="10" height="5" fill="%23655300"/></svg>'
    ];

    for (let i = 0; i < 6; i++) {
        const capybara = document.createElement('div');
        capybara.className = 'capybara';

        // Posição aleatória
        const left = Math.random() * 90;
        const top = Math.random() * 90;

        // Tamanho aleatório
        const size = 80 + Math.random() * 40;

        // Escolhe um SVG aleatório
        const randomSVG = capybarasSVGs[Math.floor(Math.random() * capybarasSVGs.length)];

        capybara.style.left = `${left}%`;
        capybara.style.top = `${top}%`;
        capybara.style.width = `${size}px`;
        capybara.style.height = `${size / 1.6}px`;
        capybara.style.backgroundImage = `url('${randomSVG}')`;

        document.body.appendChild(capybara);
    }
}

function createHearts() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = '♥';

    // Tamanho aleatório
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = `${size}px`;

    // Posição aleatória na parte inferior
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `-${size}px`;

    // Duração aleatória
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;

    container.appendChild(heart);

    // Remover após a animação terminar
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function openLetter() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const photo = document.getElementById('photo');
    const lock = document.getElementById('lock');

    if (letter.style.display === 'block') {
        return;
    }

    // Animação de abrir o envelope
    envelope.style.transform = 'translateY(-10px) scale(1.05)';
    envelope.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
    lock.style.display = 'none';

    setTimeout(() => {
        letter.style.display = 'block';
        photo.style.display = 'block';

        // Criar mais corações quando a carta é aberta
        setInterval(createHearts, 200);
    }, 500);
}

function moveButtonRandomly(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Aumentar a dificuldade diminuindo o tamanho do botão
    const currentWidth = parseInt(getComputedStyle(button).width);
    if (currentWidth > 80) {
        button.style.width = `${currentWidth - 10}px`;
    }
}