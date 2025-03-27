
// Cursor Animado
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', e => {
    const { clientX: x, clientY: y } = e;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    follower.animate([
        { left: `${follower.style.left || x}px`, top: `${follower.style.top || y}px` },
        { left: `${x}px`, top: `${y}px` }
    ], {
        duration: 300,
        fill: "forwards"
    });
});

// Bolhas de fundo
const background = document.querySelector('.background');
const totalBubbles = 30;

for (let i = 0; i < totalBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 60 + 20;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 5}s`;

    background.appendChild(bubble);
}

// Efeito de clique
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});
