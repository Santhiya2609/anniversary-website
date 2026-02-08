# Quick Start Guide

## Testing the Website Locally

### Step 1: Open the Website
Choose one of these methods to open the website locally:

#### Method A: Just Open the File (Simplest)
1. Open your file explorer
2. Navigate to the `ESweb` folder
3. Double-click `index.html`

**Note**: Some features (like some media) work better with a local server.

#### Method B: Use Python (No Installation Needed)
1. Open Command Prompt/Terminal in the `ESweb` folder
2. Run:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Visit: `http://localhost:8000`

#### Method C: Use Node.js
1. Install Node.js (nodejs.org)
2. Open Command Prompt in `ESweb` folder
3. Run:
   ```bash
   npx http-server -p 8000
   ```
4. Visit: `http://localhost:8000`

#### Method D: VS Code Live Server
1. Open the folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## What to Test

### Navigation ✓
- [ ] Click "Home" - should scroll to top
- [ ] Click "Love Quotes" - should show quotes layout
- [ ] Click "Our Memories" - should show photo grid
- [ ] Click "Special Moments" - should show videos
- [ ] Click "Quiz" - should show first question
- [ ] Click "Love Letter" - should show letter with typing animation

### Interactive Features ✓
- [ ] Music player plays/pauses (click play button)
- [ ] Volume slider works
- [ ] Next/previous buttons work
- [ ] Quote cards show on hover
- [ ] "Random Quote" button works
- [ ] Favorite quotes (heart icons)
- [ ] Click photo to open lightbox
- [ ] Lightbox arrows navigate
- [ ] Click video to play
- [ ] Video controls work

### Visual Features ✓
- [ ] Background has falling hearts
- [ ] Animations are smooth
- [ ] Dark mode toggle works (moon icon)
- [ ] Mobile menu works (hamburger icon)
- [ ] Confetti appears on quiz correct answer
- [ ] Hover effects on buttons/cards

### Responsive Design ✓
- [ ] Test on desktop (1920px wide)
- [ ] Test on tablet (iPad size)
- [ ] Test on mobile (iPhone size)
- [ ] Check Chrome DevTools (F12 → Toggle Device Toolbar)

---

## Customization Checklist

### Essential Changes
- [ ] Replace her name in hero title
- [ ] Add anniversary date to timeline
- [ ] Customize timeline events
- [ ] Update quotes (add personal ones)
- [ ] Add real photos to memories
- [ ] Add videos
- [ ] Customize the love letter
- [ ] Update quiz questions/answers

### Nice to Have
- [ ] Change colors in `css/variables.css`
- [ ] Add romantic music to audio folder
- [ ] Create video thumbnails
- [ ] Add more memories/photos
- [ ] Customize fonts

---

## File Structure Reminder
```
ESweb/
├── index.html           ← Main file
├── css/
│   ├── variables.css    ← Colors & fonts
│   └── main.css         ← All styles
├── js/
│   ├── main.js          ← App logic
│   ├── components/      ← Page components
│   └── utils/           ← Helpers
├── images/              ← Put photos here
├── videos/              ← Put MP4 videos here
├── audio/               ← Put MP3 music here
└── README.md            ← Full documentation
```

---

## Common Issues & Solutions

### Music Won't Play
1. Make sure files are named `romantic-1.mp3`, `romantic-2.mp3`, etc.
2. Place files in the `audio/` folder
3. Check browser console (F12) for errors
4. Try different audio formats (OGG, WAV)

### Images Won't Show
1. Check image paths in `js/components/memories.js`
2. Verify files are in `images/` folder
3. Check image file names and extensions
4. Use relative paths like `images/photo.jpg`

### Videos Won't Play
1. Use MP4 format (best compatibility)
2. Check file paths are correct
3. Make sure videos are in `videos/` folder
4. Try a different video player (inspect element console)

### Dark Mode Buttons Don't Work
1. Click the moon icon in the top-right
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try a different browser
4. Check browser console for JavaScript errors

### Mobile Menu Doesn't Work
1. Make sure you're on mobile size (use DevTools)
2. Click the hamburger menu (☰) icon
3. Check that JavaScript is enabled

---

## Browser Developer Tools (F12)

### Useful Features:
- **Console Tab**: Shows JavaScript errors
- **Elements Tab**: Inspect HTML/CSS
- **Device Toolbar**: Test responsive design (Ctrl+Shift+M)
- **Network Tab**: Check if files load properly

### Common Checks:
1. Are there red errors in console?
2. Are images/videos loaded in Network tab?
3. Does responsive layout work at different sizes?

---

## Next Steps

1. **Test Everything**: Go through the checklist above
2. **Customize Content**: Add her name, photos, music
3. **Add Media**: Replace placeholders with real photos/videos
4. **Deploy**: When ready, publish to web (see README.md)

---

## Deployment (When Ready)

### Quick Deployment Options:

**GitHub Pages** (Free)
1. Create GitHub account
2. Create repository named `username.github.io`
3. Upload files
4. Done! Visit `https://username.github.io`

**Netlify** (Free, easy)
1. Sign up at Netlify.com
2. Drag & drop your folder
3. Get instant deployment

**Any Web Host**
1. Get hosting (Bluehost, GoDaddy, etc.)
2. Upload via FTP
3. Visit your domain

---

## Tips for Success

1. **Work Local First**: Test everything before deploying
2. **Backup Often**: Save copies of your work
3. **Use Good Photos**: High-quality images make it special
4. **Add Personal Touches**: Customize everything
5. **Test on Mobile**: Most people will view on phone
6. **Share the URL**: Send her the link when ready!

---

## Still Need Help?

Check the main `README.md` for:
- Detailed customization instructions
- How to add photos/videos/music
- Color and theme changes
- Deployment instructions
- Advanced features
- Troubleshooting

---

**Enjoy creating your anniversary surprise!** 💕

Created: February 8, 2026
