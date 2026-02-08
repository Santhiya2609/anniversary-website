/**
 * Love Quotes Component
 * Displays romantic love quotes with favorite functionality
 */

const QuotesComponent = {
    quotes: [
        { text: "In all of history, there has never been anyone like you.", author: "Unknown" },
        { text: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
        { text: "Being deeply loved by someone gives you strength.", author: "Laozi" },
        { text: "I love you without knowing how, or when, or from where.", author: "Pablo Neruda" },
        { text: "You are the source of my joy, the center of my world and the whole of my heart.", author: "David L. Weatherford" },
        { text: "Before I met you I never knew what it was like to be able to look at someone and smile for no reason.", author: "Unknown" },
        { text: "I have for the first time found what I can truly love—I have found you.", author: "Jane Austen" },
        { text: "You make my heart smile.", author: "Unknown" },
        { text: "Every moment I spend with you is like a beautiful dream come true.", author: "Unknown" },
        { text: "You are my greatest blessing and my deepest love.", author: "Unknown" },
        { text: "Love is like the wind, you can't see it but you can feel it.", author: "Unknown" },
        { text: "You are my favorite person to spend time with.", author: "Unknown" },
        { text: "I would find you in any life, in any world.", author: "Unknown" },
        { text: "With you I forget all my worries, and with you I forget all my fears.", author: "Unknown" },
        { text: "You are my greatest adventure.", author: "Unknown" },
        { text: "I fell in love with you before I finished getting to know you.", author: "Unknown" },
        { text: "You complete me.", author: "Jerry Maguire" },
        { text: "In your eyes, I found my home.", author: "Unknown" },
        { text: "You are my soulmate, my better half, my everything.", author: "Unknown" },
        { text: "I never want to stop making memories with you.", author: "Unknown" }
    ],

    favoriteQuotes: [],

    /**
     * Initialize quotes component
     */
    init() {
        this.loadFavorites();
        this.renderQuotes();
    },

    /**
     * Render quotes grid
     */
    renderQuotes() {
        const grid = document.getElementById('quotesGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.quotes.forEach((quote, index) => {
            const card = document.createElement('div');
            card.className = 'quote-card';
            card.innerHTML = `
                <div class="quote-card__icon">💝</div>
                <p class="quote-card__text">"${quote.text}"</p>
                <p class="quote-card__author">— ${quote.author}</p>
                <button class="quote-card__favorite" data-index="${index}" onclick="app.quotes.toggleFavorite(${index})">
                    ${this.isFavorite(index) ? '❤️' : '🤍'}
                </button>
            `;

            card.addEventListener('click', () => {
                this.displayQuote(quote);
            });

            grid.appendChild(card);
        });
    },

    /**
     * Display single quote
     * @param {Object} quote - Quote object
     */
    displayQuote(quote) {
        const display = document.getElementById('randomQuoteDisplay');
        const textEl = document.getElementById('randomQuoteText');
        const authorEl = document.getElementById('randomQuoteAuthor');

        if (display && textEl && authorEl) {
            textEl.textContent = `"${quote.text}"`;
            authorEl.textContent = `— ${quote.author}`;
            display.style.display = 'block';

            // Scroll to display
            setTimeout(() => {
                display.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    },

    /**
     * Display random quote
     */
    displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.displayQuote(this.quotes[randomIndex]);
        
        // Trigger confetti
        AnimationEffects.createConfetti(2000);
    },

    /**
     * Toggle favorite status
     * @param {number} index - Quote index
     */
    toggleFavorite(index) {
        const isFav = this.isFavorite(index);
        
        if (isFav) {
            this.favoriteQuotes = this.favoriteQuotes.filter(i => i !== index);
        } else {
            this.favoriteQuotes.push(index);
            // Trigger heart animation
            AnimationEffects.createFloatingRose(event.clientX, event.clientY);
        }

        this.saveFavorites();
        this.renderQuotes();
    },

    /**
     * Check if quote is favorited
     * @param {number} index - Quote index
     * @returns {boolean}
     */
    isFavorite(index) {
        return this.favoriteQuotes.includes(index);
    },

    /**
     * Save favorites to localStorage
     */
    saveFavorites() {
        localStorage.setItem('favoriteQuotes', JSON.stringify(this.favoriteQuotes));
    },

    /**
     * Load favorites from localStorage
     */
    loadFavorites() {
        const saved = localStorage.getItem('favoriteQuotes');
        if (saved) {
            this.favoriteQuotes = JSON.parse(saved);
        }
    },

    /**
     * Get all favorite quotes
     * @returns {Array}
     */
    getFavorites() {
        return this.favoriteQuotes.map(index => this.quotes[index]);
    }
};

// Export for use
window.QuotesComponent = QuotesComponent;
