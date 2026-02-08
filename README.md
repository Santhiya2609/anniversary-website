# Anniversary Website - Setup & Customization Guide

## Overview
This is a complete romantic anniversary website with no external dependencies, built with vanilla HTML5, CSS3, and JavaScript. It's fully responsive and ready for production use.

## Project Structure
```
ESweb/
├── index.html                 # Main HTML file
├── css/
│   ├── variables.css         # CSS custom properties and color variables
│   └── main.css              # Main stylesheet (BEM methodology)
├── js/
│   ├── main.js               # Main app initialization and routing
│   ├── components/
│   │   ├── quotes.js         # Love quotes component
│   │   ├── memories.js       # Photo gallery component
│   │   ├── videos.js         # Video gallery component
│   │   ├── quiz.js           # Memory quiz component
│   │   └── letter.js         # Love letter component
│   └── utils/
│       ├── animation-effects.js  # Background animations
│       ├── lightbox.js          # Image lightbox
│       ├── music-player.js      # Background music player
│       ├── video-player.js      # Custom video player
│       └── lazy-load.js         # Lazy loading utility
├── images/                    # Photo gallery images
├── videos/                    # Special moments videos
├── audio/                     # Background music files
├── fonts/                     # Custom fonts (optional)
└── README.md                  # This file
```

## Features

### ✨ Core Features
- **SPA Navigation**: Smooth page transitions without reloads
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Animated Background**: Falling hearts and sparkles
- **Semantic HTML5**: Proper markup for accessibility

### 🎵 Music Player
- Playlist of romantic songs
- Play/pause, next/previous controls
- Volume control
- Progress bar with seek functionality
- Minimize/expand feature

### 🎬 Special Features
- **Photo Gallery**: Lightbox with navigation and zoom
- **Video Player**: Custom player with fullscreen, volume, progress controls
- **Love Quotes**: 20+ romantic quotes with favorites system (localStorage)
- **Memory Quiz**: Interactive quiz with branching to memories
- **Love Letter**: Typing animation effect
- **Timeline**: Love story timeline on home page
- **Confetti & Animations**: Celebration effects

## Customization Guide

### 1. Adding Photos to the Gallery

Edit `js/components/memories.js`:

```javascript
{
    src: 'images/your-photo.jpg',
    date: 'January 15, 2021',
    caption: 'Our special moment'
}
```

**Steps:**
1. Place your photos in the `images/` folder
2. Update the `memories` array in `MemoriesComponent`
3. Add the photo path, date, and caption

### 2. Adding Videos

Edit `js/components/videos.js`:

```javascript
{
    title: 'Your Video Title',
    description: 'Brief description',
    thumbnail: 'images/video-thumbnail.jpg',
    src: 'videos/your-video.mp4'
}
```

**Steps:**
1. Place videos in the `videos/` folder
2. Create thumbnail images (400x225px recommended)
3. Update the `videos` array in `VideosComponent`

### 3. Customizing Love Quotes

Edit `js/components/quotes.js`:

Add new quotes to the `quotes` array:

```javascript
{ 
    text: "Your custom romantic quote", 
    author: "Author Name" 
}
```

### 4. Customizing the Love Letter

Edit `js/components/letter.js`:

Replace the `letterContent` with your own message. Paragraphs are separated by `\n\n`:

```javascript
letterContent: `Your Letter Here...

Second paragraph...`
```

### 5. Customizing the Timeline

Edit `js/main.js` in the `showLoveStoryTimeline()` function:

```javascript
{
    date: 'Your Date',
    title: 'Event Title',
    content: 'Description of the event'
}
```

### 6. Updating Quiz Questions

Edit `js/components/quiz.js`:

```javascript
{
    question: "Your question?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 0,  // Index of correct answer
    linkedMemory: 0,   // Index of linked photo
    linkedType: 'memory'  // 'memory' or 'video'
}
```

### 7. Adding Songs to the Playlist

Edit `js/utils/music-player.js`:

```javascript
{ 
    name: 'Song Title', 
    artist: 'Artist Name', 
    file: 'audio/song-file.mp3', 
    duration: 0 
}
```

Place audio files in the `audio/` folder.

### 8. Colors & Theme

Edit `css/variables.css` to change colors:

```css
--color-light-pink: #ffb6c1;      /* Light pink */
--color-hot-pink: #ff69b4;        /* Primary pink */
--color-lavender-blush: #fff0f5;  /* Light background */
--color-dark-red: #8b0000;        /* Secondary/accent */
--color-gold: #ffd700;            /* Gold accents */
```

### 9. Girlfriend's Name

To add her name to the hero section, edit `index.html`:

```html
<h1 class="hero__title">Happy 4th Anniversary, [Her Name]!</h1>
```

### 10. Fonts

To use custom fonts, add them to the `fonts/` folder and update `css/variables.css`:

```css
--font-cursive: 'Your Font Name', cursive;
--font-serif: 'Your Font Name', serif;
```

## Adding Media Files

### Images
- Format: JPG, PNG (recommended: JPG for photos)
- Size: Keep under 500KB for web
- Dimensions: Use consistent aspect ratios (4:3 or 16:9)
- Path: `images/filename.jpg`

### Videos
- Format: MP4 (best browser compatibility)
- Codec: H.264 video, AAC audio
- Size: Keep under 50MB for web
- Path: `videos/filename.mp4`
- Thumbnail: Create 400x225px JPEG

### Audio
- Format: MP3 or OGG (best compatibility)
- Size: Keep under 10MB
- Bitrate: 128-192 kbps recommended
- Path: `audio/filename.mp3`
- Tools: Audacity (free), FFmpeg for conversion

## Deploying to Web

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Go to Settings → Pages
4. Select main branch as source
5. Visit your GitHub Pages URL

### Option 2: Netlify
1. Connect your GitHub repo
2. Set build command: (leave empty for static site)
3. Set publish directory: `/`
4. Deploy

### Option 3: Any Web Host
1. Upload all files via FTP/SFTP
2. Make sure `index.html` is in root directory
3. Visit your domain

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome on Android)

## Performance Tips
1. **Optimize Images**: Use tools like TinyPNG or ImageOptim
2. **Compress Videos**: Use HandBrake or FFmpeg
3. **Use Lazy Loading**: Already implemented for images/videos
4. **Cache**: Browser caching is enabled
5. **Minify**: For production, minify CSS/JS

## Local Development

### Using Python (built-in)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Using Node.js
```bash
npx http-server
```

### Using Live Server (VS Code Extension)
1. Install Live Server extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Troubleshooting

### Music/Videos Not Playing?
- Check file paths in JS files
- Ensure audio/video files are in correct folders
- Check browser console for errors (F12)
- Try different file formats

### Images Not Showing?
- Verify image file paths
- Check image file sizes
- Ensure images are in `images/` folder

### Dark Mode Not Working?
- Check localStorage in browser
- Clear cache and reload

### Mobile Menu Not Working?
- Check viewport meta tag
- Clear browser cache
- Test in Chrome DevTools mobile mode

## Advanced Customization

### Adding Password Protection
Create a login form before main content (requires backend for true security)

### Social Sharing
Add share buttons using meta tags (Open Graph & Twitter Card):

```html
<meta property="og:title" content="Our Anniversary">
<meta property="og:image" content="images/share-image.jpg">
<meta property="og:description" content="Happy anniversary!">
```

### Analytics
Add Google Analytics in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### SEO Improvements
- Update meta tags in `<head>`
- Add structured data (Schema.org)
- Optimize images with alt text
- Use semantic HTML

## Support & Tips

1. **Always backup** your files before making changes
2. **Test locally** before deploying
3. **Check console** (F12) for errors
4. **Use descriptive filenames** for videos/images
5. **Keep file sizes manageable** for faster loading

## License
This project is created for personal use. Feel free to modify and customize for your own anniversary website!

## Date Tracker
- Website Created: February 8, 2026
- Anniversary Date: January 1, 2024
- 4 Years Together!

---

**Enjoy celebrating your love!** 💕
