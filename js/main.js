/**
 * Main Application Module
 * Initializes and manages the SPA (Single Page Application)
 */

const app = {
    // Component references
    quotes: QuotesComponent,
    memories: MemoriesComponent,
    videos: VideosComponent,
    quiz: QuizComponent,
    letter: LetterComponent,
    musicPlayer: MusicPlayer,
    videoPlayer: VideoPlayer,
    lightbox: Lightbox,

    currentPage: 'home',
    isDarkMode: false,

    /**
     * Initialize the application
     */
    init() {
        this.setupPageNavigation();
        this.setupThemeToggle();
        this.setupMobileMenu();
        this.initializeComponents();
        this.loadThemePreference();
        this.showLoveStoryTimeline();
    },

    /**
     * Setup page navigation
     */
    setupPageNavigation() {
        // Add click handlers to nav links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                this.navigateTo(page);
                this.closeMobileMenu();
            });
        });
    },

    /**
     * Navigate to a page
     * @param {string} pageName - Name of page to navigate to
     */
    navigateTo(pageName) {
        // Update active nav link
        document.querySelectorAll('.nav__link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });

        // Hide all sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const section = document.getElementById(pageName);
        if (section) {
            section.classList.add('active');
            this.currentPage = pageName;

            // Scroll to top
            window.scrollTo(0, 0);

            // Trigger component initialization if needed
            if (pageName === 'quotes' && !this.quotes.quotes) {
                this.quotes.init();
            } else if (pageName === 'memories' && !this.memories.memories) {
                this.memories.init();
            } else if (pageName === 'videos' && !this.videos.videos) {
                this.videos.init();
            } else if (pageName === 'quiz' && !this.quiz.questions) {
                this.quiz.init();
            } else if (pageName === 'letter' && !this.letter.letterContent) {
                this.letter.init();
            }
        }
    },

    /**
     * Initialize all components
     */
    initializeComponents() {
        this.quotes.init();
        this.memories.init();
        this.videos.init();
        this.quiz.init();
        this.letter.init();
        this.musicPlayer.init();
        this.videoPlayer.init();
    },

    /**
     * Setup dark mode toggle
     */
    setupThemeToggle() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    },

    /**
     * Toggle between light and dark mode
     */
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        const html = document.documentElement;

        if (this.isDarkMode) {
            html.setAttribute('data-theme', 'dark');
            document.getElementById('themeToggle').textContent = '☀️';
        } else {
            html.removeAttribute('data-theme');
            document.getElementById('themeToggle').textContent = '🌙';
        }

        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },

    /**
     * Load theme preference from localStorage
     */
    loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.toggleTheme();
        }
    },

    /**
     * Setup mobile menu toggle
     */
    setupMobileMenu() {
        const toggle = document.getElementById('navToggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
    },

    /**
     * Toggle mobile menu visibility
     */
    toggleMobileMenu() {
        const nav = document.getElementById('navigation');
        if (nav) {
            nav.classList.toggle('active');
        }
    },

    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        const nav = document.getElementById('navigation');
        if (nav) {
            nav.classList.remove('active');
        }
    },

    /**
     * Show love story timeline on home page
     */
    showLoveStoryTimeline() {
        const timeline = document.getElementById('timeline');
        if (!timeline) return;

        const timelineEvents = [
            {
                date: 'January 1, 2021',
                title: 'The First Meeting',
                content: 'Our eyes met and my world changed forever. That moment started everything.'
            },
            {
                date: 'February 14, 2021',
                title: 'First Valentine',
                content: 'Our first Valentine\'s Day together was magical and unforgettable.'
            },
            {
                date: 'May 20, 2021',
                title: 'First Anniversary',
                content: 'One year together and my love for you grows stronger every day.'
            },
            {
                date: 'January 1, 2022',
                title: 'Second Anniversary',
                content: 'Two years of happiness, laughter, and countless beautiful memories.'
            },
            {
                date: 'January 1, 2023',
                title: 'Third Anniversary',
                content: 'Three years of building our life together, and it just keeps getting better.'
            },
            {
                date: 'January 1, 2024',
                title: 'Fourth Anniversary',
                content: 'Four incredible years with you. Today, I celebrate our love and commitment.'
            }
        ];

        timeline.innerHTML = timelineEvents.map((event, index) => `
            <div class="timeline__item" style="animation-delay: ${index * 0.1}s;">
                <div class="timeline__date">${event.date}</div>
                <div class="timeline__content">
                    <div class="timeline__title">${event.title}</div>
                    <p>${event.content}</p>
                </div>
            </div>
        `).join('');
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();

    // Handle scroll to show anniversary countdown
    window.addEventListener('scroll', () => {
        // You can add scroll-based interactions here
    });

    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause music when page is hidden
            if (app.musicPlayer.isPlaying) {
                app.musicPlayer.pause();
            }
        }
    });
});

// Export for use in other scripts
window.app = app;
