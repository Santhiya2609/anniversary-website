# Technical Documentation

## Architecture Overview

This is a Single Page Application (SPA) built with vanilla JavaScript, requiring no build tools or external dependencies.

```
┌─────────────────────────────────────┐
│         User Interface              │
│     (HTML + CSS Animations)         │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│      Main Application (main.js)     │
│   • Navigation/Routing              │
│   • Component Initialization        │
│   • Theme Management                │
└────────────┬────────────────────────┘
             │
    ┌────────┴──────────────────────────────┐
    │                                       │
┌───▼──────────┐     ┌──────────────────┐┌──────────────────┐
│ Components   │     │ Utilities        ││ Managers         │
├──────────────┤     ├──────────────────┤├──────────────────┤
│• Quotes      │     │• Animations      ││• Music Player   │
│• Memories    │     │• Lightbox        ││• Video Player   │
│• Videos      │     │• Lazy Loading    ││• LocalStorage   │
│• Quiz        │     │                  ││                 │
│• Letter      │     │                  ││                 │
└──────────────┘     └──────────────────┘└──────────────────┘
```

---

## File Structure & Responsibilities

### Core Files

#### `index.html` (Main HTML)
- Semantic HTML5 structure
- All page sections
- Audio and video elements
- Script loading order
- Meta tags for SEO

**Key Classes (BEM):**
- `.page-section` - Page containers
- `.header`, `.nav` - Navigation
- `.hero` - Hero section
- `.container` - Content wrapper

#### `css/variables.css`
- CSS custom properties (--color-*, --font-*, --spacing-*, etc.)
- Dark mode theme overrides
- Responsive breakpoints
- Z-index management
- Animation timing functions

#### `css/main.css`
- Complete styling using BEM methodology
- Mobile-first responsive design
- Animations keyframes
- Print styles
- Dark mode support

**Major BEM Components:**
- `.header` - Fixed header with navigation
- `.nav` - Navigation menu
- `.hero` - Hero section with CTA
- `.btn` - Button component
- `.quote-card` - Quote card
- `.memory-card` - Photo card with lightbox
- `.video-card` - Video card with player
- `.quiz__` - Quiz sections
- `.music-player` - Floating music player
- `.video-player` - Fullscreen video player
- `.lightbox` - Image lightbox modal
- `.letter` - Love letter page
- `.timeline` - Timeline of events

### Component Files

All components follow this pattern:

```javascript
const ComponentName = {
    // Data
    data: [],
    
    // State
    currentIndex: 0,
    
    // Initialize
    init() { ... },
    
    // Render
    render() { ... },
    
    // Methods
    methodName() { ... }
};

window.ComponentName = ComponentName; // Export
```

#### `js/components/quotes.js`
```
QuotesComponent
├── quotes[] - Array of quote objects
├── favoriteQuotes[] - Favorite IDs stored in localStorage
├── init() - Initialize and render
├── renderQuotes() - Render grid
├── displayQuote() - Show single quote
├── displayRandomQuote() - Show random
├── toggleFavorite() - Add/remove favorite
├── saveFavorites() - Persist to localStorage
└── loadFavorites() - Restore from localStorage
```

#### `js/components/memories.js`
```
MemoriesComponent
├── memories[] - Photo objects with src, date, caption
├── init() - Initialize
├── renderMemories() - Render photo grid
├── addMemory() - Add new photo
└── getAllMemories() - Get all photos
```

#### `js/components/videos.js`
```
VideosComponent
├── videos[] - Video objects
├── init() - Initialize
├── renderVideos() - Render video grid
├── addVideo() - Add new video
├── getVideoByTitle() - Search by title
└── getAllVideos() - Get all videos
```

#### `js/components/quiz.js`
```
QuizComponent
├── questions[] - Quiz questions
├── currentQuestionIndex - Current question index
├── score - Points earned
├── answers[] - User answers
├── linkedMemories[] - Correct answer links
├── init() - Reset and start
├── renderQuestion() - Display current question
├── selectAnswer() - Record answer
├── nextQuestion() - Move forward
├── showResults() - Display results
└── getLinkedContent() - Get unlocked memories
```

#### `js/components/letter.js`
```
LetterComponent
├── letterContent - The letter text
├── init() - Initialize
├── renderLetter() - Render with animation
├── typeText() - Type text animation
└── downloadPDF() - Export as PDF
```

### Utility Files

#### `js/utils/animation-effects.js`
```
AnimationEffects
├── init() - Start all animations
├── createFallingHearts() - Background animation
├── createSparkles() - Sparkle effect
├── createConfetti() - Celebration effect
└── createFloatingRose() - Floating rose animation
```

#### `js/utils/lightbox.js`
```
Lightbox
├── images[] - Image array
├── currentIndex - Current image
├── init() - Initialize with images
├── open() - Open lightbox
├── close() - Close lightbox
├── next/prev() - Navigation
├── updateLightbox() - Display current
├── addKeyboardListeners() - Arrow keys, Esc
└── removeKeyboardListeners() - Cleanup
```

#### `js/utils/music-player.js`
```
MusicPlayer
├── playlist[] - Song objects
├── currentTrackIndex - Current song
├── isPlaying - Play state
├── audioElement - HTML audio element
├── isMinimized - UI state
├── init() - Initialize with events
├── play/pause/togglePlay() - Control
├── nextTrack/previousTrack() - Navigation
├── setVolume() - Volume control
├── seek() - Time jump
├── updateProgress() - Progress bar
├── updateTrackInfo() - Display info
└── toggleMinimize() - UI state
```

#### `js/utils/video-player.js`
```
VideoPlayer
├── videoElement - HTML video element
├── isPlaying - Play state
├── isFullscreen - Fullscreen state
├── init() - Initialize
├── open() - Open player with video
├── close() - Close player
├── play/pause/togglePlay() - Control
├── setVolume() - Volume control
├── seek() - Time jump
├── updateProgress() - Progress bar
├── formatTime() - Time formatting
├── toggleFullscreen() - Fullscreen mode
└── addKeyboardListeners() - Shortcuts
```

#### `js/utils/lazy-load.js`
```
LazyLoad
├── init() - Setup IntersectionObserver
├── loadAllMedia() - Fallback loader
```

### Main Application File

#### `js/main.js`
```
app
├── quotes - QuotesComponent reference
├── memories - MemoriesComponent reference
├── videos - VideosComponent reference
├── quiz - QuizComponent reference
├── letter - LetterComponent reference
├── musicPlayer - MusicPlayer reference
├── videoPlayer - VideoPlayer reference
├── lightbox - Lightbox reference
├── currentPage - Current active page
├── isDarkMode - Dark mode state
├── init() - Initialize app
├── navigateTo() - SPA routing
├── setupPageNavigation() - Nav event handlers
├── setupThemeToggle() - Dark mode toggle
├── loadThemePreference() - Restore theme from storage
├── setupMobileMenu() - Mobile menu toggle
├── closeMobileMenu() - Hide mobile menu
└── showLoveStoryTimeline() - Render timeline
```

---

## Data Structures

### Quote Object
```javascript
{
    text: string,      // The quote text
    author: string     // Attribution
}
```

### Memory (Photo) Object
```javascript
{
    src: string,       // Image path
    date: string,      // Display date
    caption: string    // Photo description
}
```

### Video Object
```javascript
{
    title: string,         // Video title
    description: string,   // Brief description
    thumbnail: string,     // Thumbnail image path
    src: string            // Video file path
}
```

### Quiz Question Object
```javascript
{
    question: string,          // Question text
    options: string[],         // 4 answer options
    correctAnswer: number,     // Correct option index
    linkedMemory: number,      // Memory index to link
    linkedType: 'memory'|'video'  // Content type
}
```

### Timeline Event Object
```javascript
{
    date: string,      // Event date
    title: string,     // Event title
    content: string    // Event description
}
```

---

## State Management

### localStorage Keys
```javascript
'favoriteQuotes'    // Array of favorite quote indices
'theme'             // 'light' or 'dark'
```

### Component State
- Each component maintains its own state
- No shared state store (kept simple)
- Data persists in localStorage where noted

---

## Event Flow

### Page Navigation
```
User clicks nav link
    ↓
.nav__link click handler
    ↓
app.navigateTo(pageName)
    ↓
Hide current .page-section
Show new .page-section
Initialize component if needed
Scroll to top
```

### Quiz Interaction
```
User selects answer
    ↓
selectAnswer() called
    ↓
Check if correct
If correct: score++, create confetti, store linked memory
Update UI to show correct/incorrect
Move to next question or show results
```

### Music Playing
```
User clicks play button
    ↓
MusicPlayer.togglePlay()
    ↓
If paused: play() / If playing: pause()
Update button text
Update progress bar on timeupdate event
Auto-play next track on ended event
```

---

## Key Design Patterns

### 1. Module Pattern
Each JavaScript file exports a single object with methods:
```javascript
const ComponentName = { /* methods */ };
window.ComponentName = ComponentName;
```

### 2. Event Delegation
Navigation and interactive elements use inline `onclick` handlers for simplicity:
```html
<button onclick="app.navigateTo('home')">Home</button>
```

### 3. CSS Custom Properties (Variables)
Colors, fonts, spacing defined once:
```css
:root {
    --primary-color: #ff69b4;
    --spacing-md: 16px;
}
```

### 4. BEM Methodology
Consistent naming convention:
```css
.block__element--modifier
.quote-card__text
.btn--primary
```

### 5. Responsive Design
Mobile-first with breakpoints at 768px and 480px:
```css
/* Base styles (mobile) */
.element { }

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1024px) { }
```

---

## Extending the Application

### Add a New Component

1. Create `js/components/new-component.js`:
```javascript
const NewComponent = {
    data: [],
    init() {
        this.render();
    },
    render() {
        // Render logic
    }
};
window.NewComponent = NewComponent;
```

2. Add to HTML:
```html
<section id="new-page" class="page-section section">
    <div id="newComponentContainer"></div>
</section>
```

3. Add to nav in HTML:
```html
<a href="#new-page" class="nav__link" data-page="new-page">New Page</a>
```

4. Register in `js/main.js`:
```javascript
const app = {
    newComponent: NewComponent,
    navigateTo(pageName) {
        // ... existing code ...
        if (pageName === 'new-page') {
            this.newComponent.init();
        }
    }
};
```

### Add a New Feature

Example: Add Anniversary Countdown
```javascript
const AnniversaryCountdown = {
    targetDate: new Date('2025-01-15').getTime(),
    
    init() {
        setInterval(() => this.updateCountdown(), 1000);
    },
    
    updateCountdown() {
        const now = new Date().getTime();
        const distance = this.targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
};
```

### Add Password Protection

1. Add login form to `index.html` before main content
2. Check localStorage for auth token
3. Show main content only if authenticated
4. Use prompt() or form submission for password

Note: This is client-side only - for true security, use a backend.

---

## Performance Optimization

### Current Optimizations
1. **Lazy Loading**: Images/videos load on scroll
2. **CSS Animations**: Hardware-accelerated with `transform`
3. **Event Delegation**: Few event listeners
4. **Minimal DOM**: Dynamic content added only when shown

### Further Optimization Ideas
1. **Code Splitting**: Separate components into chunks
2. **Minification**: Compress CSS and JS for production
3. **Image Optimization**: Use WebP with fallbacks
4. **Service Workers**: Offline caching
5. **CDN**: Host on content delivery network

---

## Debugging Tips

### Browser Console
```javascript
// Check current page
console.log(app.currentPage);

// Access components
console.log(app.quotes.quotes); // All quotes
console.log(app.memories.memories); // All memories
console.log(app.musicPlayer.isPlaying); // Music state

// Manually trigger actions
app.musicPlayer.play();
app.quiz.init();
app.navigateTo('memories');
```

### Check Data
```javascript
// View localStorage
console.log(localStorage);

// Clear specific data
localStorage.removeItem('favoriteQuotes');

// Clear all
localStorage.clear();
```

### Test Responsive Design
1. Open DevTools (F12)
2. Press Ctrl+Shift+M
3. Select device or custom dimensions
4. Check layout at different breakpoints

---

## Browser Compatibility

### Supported Features
- ES6 features (arrow functions, template literals, etc.)
- Flexbox and CSS Grid
- CSS Custom Properties (Variables)
- IntersectionObserver API
- LocalStorage
- HTML5 audio and video

### Fallbacks Provided
- LazyLoad falls back to eager loading if IntersectionObserver unavailable
- All modern browsers (2015+) supported

### Not Supported
- Internet Explorer (use modern browsers)
- Old Android browsers (use Chrome/Firefox)

---

## Security Considerations

### Current Limitations (Client-Side Only)
- No password protection (viewable source)
- No user authentication
- All data visible in browser
- Not suitable for sensitive information

### Recommendations for Production
1. Host on HTTPS only
2. Add backend authentication if needed
3. Use environment variables for sensitive data
4. Implement rate limiting if needed
5. Regular security audits

---

## Version History

### v1.0 (Current)
- Complete SPA with 6 main pages
- Music and video players
- Photo gallery with lightbox
- Interactive quiz
- Love letter with typing animation
- Timeline and love quotes
- Dark mode support
- Fully responsive design
- No dependencies

---

## Code Quality Guidelines

### Naming Conventions
- Variables: `camelCase`
- Functions: `camelCase`
- CSS Classes: `kebab-case` (BEM)
- Constants: `UPPER_SNAKE_CASE`

### Comment Structure
```javascript
/**
 * Function description
 * @param {type} paramName - Description
 * @returns {type} Description
 */
```

### Function Size
- Keep functions under 30 lines when possible
- One responsibility per function
- Descriptive names that explain purpose

---

## Resources & Tools

### Useful Tools
- **VS Code**: Code editor (free)
- **Prettier**: Code formatter
- **TinyPNG.com**: Image compression
- **FFmpeg**: Video conversion
- **Audacity**: Audio editing
- **Chrome DevTools**: Debugging

### Learning Resources
- MDN Web Docs (vanilla JS and CSS)
- CSS-Tricks (CSS techniques)
- JavaScript.info (JS fundamentals)
- Web.dev (Modern web development)

---

**This completes the technical documentation!** 💻
