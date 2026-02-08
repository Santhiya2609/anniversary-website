/**
 * Love Letter Component
 * Displays a heartfelt anniversary letter with typing animation
 */

const LetterComponent = {
    letterContent: `Four years have passed since that moment when our eyes first met, and everyday since has felt like a beautiful dream. I want you to know that loving you has been the greatest privilege of my life.

These four years with you have been filled with countless moments that made me fall in love with you even deeper—your unexpected laugh, the way you look at me with those beautiful eyes, the warmth of your hand in mine, and the comfort of just sitting together in silence.

You are my greatest adventure, my safe harbor, and my home. In a world that sometimes feels chaotic, you are the one constant that brings me peace. Every morning I wake up grateful for another day to love you, to cherish you, and to build our forever together.

Through the ups and downs, you've been my rock, my support, and my inspiration. You believe in me even when I doubt myself, and you love me unconditionally. That kind of love is rare and precious, and I promise to spend the rest of my life appreciating and nurturing it.

I look forward to many more years of creating memories with you, of laughing together, of growing old together, and of loving each other more deeply with each passing day. You are not just my partner; you are my soulmate, my better half, and my forever love.

Thank you for being you. Thank you for loving me. Thank you for making every day an adventure.

Forever and always, yours.`,

    /**
     * Initialize letter component
     */
    init() {
        this.renderLetter();
    },

    /**
     * Render letter with typing animation
     */
    renderLetter() {
        const letterContent = document.getElementById('letterContent');
        const dateEl = document.getElementById('letterDate');

        if (!letterContent || !dateEl) return;

        // Set date
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = today.toLocaleDateString('en-US', options);

        // Clear content
        letterContent.innerHTML = '';

        // Type out the letter
        this.typeText(letterContent, this.letterContent, 20);
    },

    /**
     * Type text with animation
     * @param {Element} element - DOM element to type into
     * @param {string} text - Text to type
     * @param {number} speed - Typing speed in milliseconds
     */
    typeText(element, text, speed = 20) {
        let index = 0;
        let currentParagraph = null;

        const typeNextCharacter = () => {
            if (index < text.length) {
                const char = text[index];

                // Create new paragraph on double newline
                if (text[index] === '\n' && text[index + 1] === '\n') {
                    currentParagraph = document.createElement('p');
                    element.appendChild(currentParagraph);
                    index += 2;
                    setTimeout(typeNextCharacter, speed * 3);
                    return;
                }

                // Create paragraph if needed
                if (!currentParagraph) {
                    currentParagraph = document.createElement('p');
                    element.appendChild(currentParagraph);
                }

                // Add character
                if (char !== '\n') {
                    currentParagraph.textContent += char;
                }

                index++;
                setTimeout(typeNextCharacter, speed);
            }
        };

        typeNextCharacter();
    },

    /**
     * Download letter as PDF
     * Note: This is a simplified implementation. For production, consider using a library like jsPDF
     */
    downloadPDF() {
        const alertMsg = `PDF download requires adding a PDF library (like jsPDF) to the project. 
        
For now, you can use the Print function to save as PDF using your browser's print dialog.

Would you like to use the Print function instead?`;

        if (confirm(alertMsg)) {
            window.print();
        }
    }
};

// Export for use
window.LetterComponent = LetterComponent;
