/**
 * Animation Effects Module
 * Handles falling hearts, sparkles, confetti, and other background animations
 */

const AnimationEffects = {
    /**
     * Initialize all background animations
     */
    init() {
        this.createFallingHearts();
        this.createSparkles();
    },

    /**
     * Create falling hearts animation
     */
    createFallingHearts() {
        const container = document.getElementById('fallingHearts');
        if (!container) return;

        const hearts = ['❤️', '💕', '💖', '💗', '💝'];
        
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('falling-heart');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 12000);
        }, 300);
    },

    /**
     * Create sparkles animation
     */
    createSparkles() {
        const container = document.getElementById('sparkles');
        if (!container) return;

        const sparkles = ['✨', '⭐', '💫'];
        
        setInterval(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            
            container.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 5000);
        }, 500);
    },

    /**
     * Create confetti animation
     * @param {number} duration - How long confetti should fall in milliseconds
     */
    createConfetti(duration = 3000) {
        const colors = ['#ff69b4', '#8b0000', '#ffd700', '#ffb6c1'];
        const confettiPieces = 50;

        for (let i = 0; i < confettiPieces; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '0px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), duration);
        }
    },

    /**
     * Create a floating rose animation at specific coordinates
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    createFloatingRose(x, y) {
        const rose = document.createElement('div');
        rose.textContent = '🌹';
        rose.style.position = 'fixed';
        rose.style.left = x + 'px';
        rose.style.top = y + 'px';
        rose.style.fontSize = '30px';
        rose.style.pointerEvents = 'none';
        rose.style.zIndex = '1000';
        rose.style.animation = 'float 2s ease-out forwards';
        
        document.body.appendChild(rose);
        
        setTimeout(() => rose.remove(), 2000);
    }
};

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    AnimationEffects.init();
});

// Add CSS for confetti fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
