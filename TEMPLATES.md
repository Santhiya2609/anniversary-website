# CUSTOMIZATION EXAMPLES & TEMPLATES

This file provides copy-paste templates for easy customization.

---

## Her Name

### Location: `index.html` - Line 128

**Find this:**
```html
<h1 class="hero__title">Happy 4th Anniversary</h1>
```

**Replace with:**
```html
<h1 class="hero__title">Happy 4th Anniversary, [Her Name]!</h1>
```

**Example:**
```html
<h1 class="hero__title">Happy 4th Anniversary, Sarah!</h1>
```

---

## Love Letter Template

### Location: `js/components/letter.js`

**Replace the `letterContent` with:**

```javascript
letterContent: `My Dearest [Her Name],

Four years have passed since that moment when our eyes first met, and every day since has felt like a beautiful dream. I want you to know that loving you has been the greatest privilege of my life.

[Share your first meeting story here]

These four years with you have been filled with countless moments that made me fall in love with you even deeper. [Share specific memories and moments].

You are my greatest adventure, my safe harbor, and my home. In a world that sometimes feels chaotic, you are the one constant that brings me peace. Every morning I wake up grateful for another day to love you, to cherish you, and to build our forever together.

[Share how she makes you feel and what you love about her]

Through the ups and downs, you've been my rock, my support, and my inspiration. You believe in me even when I doubt myself, and you love me unconditionally. That kind of love is rare and precious, and I promise to spend the rest of my life appreciating and nurturing it.

I look forward to many more years of creating memories with you, of laughing together, of growing old together, and of loving each other more deeply with each passing day.

[Share your dreams for the future together]

Thank you for being you. Thank you for loving me. Thank you for making every day an adventure.

Forever and always, yours.`,
```

---

## Photos Array Template

### Location: `js/components/memories.js`

**Replace the `memories` array with:**

```javascript
memories: [
    { 
        src: 'images/first-photo.jpg', 
        date: 'Jan 15, 2021', 
        caption: 'The day we first met - everything changed' 
    },
    { 
        src: 'images/first-date.jpg', 
        date: 'Feb 14, 2021', 
        caption: 'Our first Valentine\'s Day together' 
    },
    { 
        src: 'images/first-vacation.jpg', 
        date: 'May 20, 2021', 
        caption: 'First trip together - making memories' 
    },
    { 
        src: 'images/anniversary-1.jpg', 
        date: 'Jan 1, 2022', 
        caption: 'One year of happiness' 
    },
    { 
        src: 'images/holiday.jpg', 
        date: 'Dec 25, 2021', 
        caption: 'First Christmas together' 
    },
    { 
        src: 'images/adventure.jpg', 
        date: 'Jun 15, 2022', 
        caption: 'Summer adventures with you' 
    },
    { 
        src: 'images/cozy-night.jpg', 
        date: 'Mar 10, 2023', 
        caption: 'Cozy nights are the best with you' 
    },
    { 
        src: 'images/recent.jpg', 
        date: 'Dec 30, 2023', 
        caption: 'Still my favorite person' 
    }
],
```

---

## Videos Array Template

### Location: `js/components/videos.js`

**Replace the `videos` array with:**

```javascript
videos: [
    {
        title: 'Our First Date',
        description: 'Memories from the day that started it all',
        thumbnail: 'images/date-thumb.jpg',
        src: 'videos/first-date.mp4'
    },
    {
        title: 'Anniversary Surprise',
        description: 'A special video I made for you',
        thumbnail: 'images/surprise-thumb.jpg',
        src: 'videos/anniversary-surprise.mp4'
    },
    {
        title: 'Vacation Highlights',
        description: 'Our best moments from paradise',
        thumbnail: 'images/vacation-thumb.jpg',
        src: 'videos/vacation.mp4'
    },
    {
        title: 'Love Story Montage',
        description: 'Our journey through the years',
        thumbnail: 'images/montage-thumb.jpg',
        src: 'videos/montage.mp4'
    },
    {
        title: 'Message from Me',
        description: 'A heartfelt video message',
        thumbnail: 'images/message-thumb.jpg',
        src: 'videos/message.mp4'
    }
],
```

---

## Quotes Array Template

### Location: `js/components/quotes.js`

**Add these personal quotes (at least 10):**

```javascript
quotes: [
    { 
        text: "Your smile is the first thing I look for in a room full of strangers.", 
        author: "Unknown" 
    },
    { 
        text: "I love you for all that you are, all that you have been, and all you're yet to be.", 
        author: "Unknown" 
    },
    { 
        text: "Life has given me the greatest gift - being able to love you for 4 beautiful years.", 
        author: "Me, to you" 
    },
    { 
        text: "With you, I forget all my worries, and with you I forget all my fears.", 
        author: "Unknown" 
    },
    { 
        text: "You are my today and all of my tomorrows.", 
        author: "Leo Christopher" 
    },
    { 
        text: "I would find you in any life, in any world.", 
        author: "Unknown" 
    },
    { 
        text: "Every moment with you is like a beautiful dream come true.", 
        author: "Unknown" 
    },
    { 
        text: "You complete me in ways I never thought possible.", 
        author: "Unknown" 
    },
    { 
        text: "My favorite place is inside your arms.", 
        author: "Unknown" 
    },
    { 
        text: "Forever isn't long enough to love someone like you.", 
        author: "Unknown" 
    },
    // Add 10+ more of your favorites
],
```

---

## Quiz Questions Template

### Location: `js/components/quiz.js`

**Replace the `questions` array with:**

```javascript
questions: [
    {
        question: "Where did we first meet?",
        options: ["Coffee Shop", "Bar", "Park", "Through Friends"],
        correctAnswer: 0,
        linkedMemory: 0,
        linkedType: 'memory'
    },
    {
        question: "What was our first date?",
        options: ["Dinner", "Coffee", "Movie", "Hiking"],
        correctAnswer: 1,
        linkedMemory: 1,
        linkedType: 'memory'
    },
    {
        question: "What is our song?",
        options: ["Perfect", "A Thousand Years", "All of Me", "Thinking Out Loud"],
        correctAnswer: 1,
        linkedMemory: 2,
        linkedType: 'video'
    },
    {
        question: "When did we first say 'I love you'?",
        options: ["1 month", "3 months", "6 months", "1 year"],
        correctAnswer: 1,
        linkedMemory: 3,
        linkedType: 'memory'
    },
    {
        question: "What's your favorite thing about me?",
        options: ["My laugh", "My kindness", "My eyes", "All of the above"],
        correctAnswer: 3,
        linkedMemory: 4,
        linkedType: 'memory'
    },
    {
        question: "Where would you like to travel with me?",
        options: ["Paris", "Tokyo", "Bali", "Anywhere with you"],
        correctAnswer: 3,
        linkedMemory: 5,
        linkedType: 'video'
    },
    {
        question: "How long have we been together?",
        options: ["2 years", "3 years", "4 years", "5 years"],
        correctAnswer: 2,
        linkedMemory: 0,
        linkedType: 'memory'
    },
    {
        question: "What makes you happy?",
        options: ["Your jokes", "Our adventures", "Just being with you", "All of the above"],
        correctAnswer: 3,
        linkedMemory: 3,
        linkedType: 'video'
    }
],
```

---

## Timeline Template

### Location: `js/main.js` - `showLoveStoryTimeline()` function

**Replace the `timelineEvents` array:**

```javascript
const timelineEvents = [
    {
        date: 'January 15, 2021',
        title: 'The Beginning',
        content: 'The day we first met changed my life forever. I knew you were special from that moment.'
    },
    {
        date: 'February 28, 2021',
        title: 'First "I Love You"',
        content: 'I couldn\'t hold it in anymore. I told you I loved you, and you said it back. Pure happiness.'
    },
    {
        date: 'January 15, 2022',
        title: 'First Anniversary',
        content: 'One year together! Time flew, but every moment with you was worth savoring.'
    },
    {
        date: 'July 20, 2022',
        title: 'Summer Adventure',
        content: 'Our first major trip together. Creating memories in paradise with my favorite person.'
    },
    {
        date: 'January 15, 2023',
        title: 'Three Years of Love',
        content: 'Three years and I just keep falling more in love with you. You\'re my everything.'
    },
    {
        date: 'January 15, 2024',
        title: 'Four Years Together',
        content: 'Four incredible years! I can\'t wait for forever with you. Happy Anniversary!'
    },
    {
        date: 'Today',
        title: 'Our Forever Begins',
        content: 'I made this website to celebrate you and us. You\'re my greatest blessing.'
    }
];
```

---

## Playlist Template

### Location: `js/utils/music-player.js`

**Replace or add to the `playlist` array:**

```javascript
playlist: [
    { 
        name: 'A Thousand Years', 
        artist: 'Christina Perri', 
        file: 'audio/romantic-1.mp3', 
        duration: 0 
    },
    { 
        name: 'Perfect', 
        artist: 'Ed Sheeran', 
        file: 'audio/romantic-2.mp3', 
        duration: 0 
    },
    { 
        name: 'All of Me', 
        artist: 'John Legend', 
        file: 'audio/romantic-3.mp3', 
        duration: 0 
    },
    { 
        name: 'Make You Feel My Love', 
        artist: 'Adele', 
        file: 'audio/romantic-4.mp3', 
        duration: 0 
    },
    { 
        name: 'Thinking Out Loud', 
        artist: 'Ed Sheeran', 
        file: 'audio/romantic-5.mp3', 
        duration: 0 
    }
],
```

---

## Color Customization Template

### Location: `css/variables.css`

**Change the color variables:**

```css
:root {
    /* Rose & Gold Theme (Romantic) */
    --color-light-pink: #ffb6c1;
    --color-hot-pink: #ff69b4;
    --color-lavender-blush: #fff0f5;
    --color-dark-red: #8b0000;
    --color-gold: #ffd700;

    /* Alternative: Purple & Silver */
    /* 
    --color-light-pink: #e6d5f0;
    --color-hot-pink: #b19cd9;
    --color-lavender-blush: #f3e5f5;
    --color-dark-red: #663399;
    --color-gold: #c0c0c0;
    */

    /* Alternative: Red & Gold (Classic) */
    /*
    --color-light-pink: #ffcccc;
    --color-hot-pink: #ff3333;
    --color-lavender-blush: #fff5e6;
    --color-dark-red: #990000;
    --color-gold: #ffb700;
    */
}
```

---

## Making Files Printable

To make the love letter more printer-friendly:

1. The website already has print styles!
2. Just click "Print" button on the letter
3. Or use Ctrl+P / Cmd+P
4. Select "Save as PDF"

---

## Important Notes

- **File Paths**: Always use forward slashes `/` (not backslashes)
- **Quotes**: Escape single quotes with `\'` if inside single quotes
- **Dates**: Use consistent format (Month Day, Year)
- **Array Indices**: Start counting from 0
- **Remember**: Back up files before making changes
- **Test Locally**: Always test before sharing

---

## Quick Copy-Paste Building Steps

1. **Hero Title**: Find in `index.html`, add her name
2. **Love Letter**: Replace entire content in `letter.js`
3. **Photos**: Add 8-12 to `memories.js` array
4. **Videos**: Add 4-6 to `videos.js` array
5. **Quotes**: Replace 20 in `quotes.js` array
6. **Quiz**: Update 8 questions in `quiz.js`
7. **Timeline**: Update 6 events in `main.js`
8. **Music**: Add 4-5 songs in `music-player.js`
9. **Colors**: Update if desired in `variables.css`
10. **Test**: Open in browser, verify everything works

---

**You've got all the templates you need! Happy customizing!** 💕
