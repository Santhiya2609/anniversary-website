# CUSTOMIZATION CHECKLIST

This file helps you track all customizations needed. Check off each item as you complete it.

---

## ⚠️ CRITICAL - MUST DO FIRST

### Her Name
- [ ] Find: `Happy 4th Anniversary` in `index.html` line 128
- [ ] Replace with: `Happy 4th Anniversary, [Her Name]!`
- [ ] Example: `Happy 4th Anniversary, Sarah!`

### Anniversary Date
- [ ] Find timeline in `js/main.js` function `showLoveStoryTimeline()`
- [ ] Update the "Fourth Anniversary" event date
- [ ] Add other milestone dates

### Customize Questions
- [ ] Open `js/components/quiz.js`
- [ ] Replace all 8 quiz questions with your own
- [ ] Make sure correctAnswer indices match

---

## 📸 PHOTOS & IMAGES

### Adding Photos to "Our Memories"
- [ ] Create `images/` folder (already exists)
- [ ] Add your photos as JPG files
- [ ] Open `js/components/memories.js`
- [ ] Find the `memories` array
- [ ] Replace placeholders:
  ```javascript
  {
      src: 'images/your-photo.jpg',
      date: 'Jan 1, 2021',
      caption: 'Your caption'
  }
  ```
- [ ] Add at least 6-12 photos for best effect

### Recommended Photos:
- [ ] First photo together
- [ ] First date photo
- [ ] First vacation/trip
- [ ] Holiday celebrations
- [ ] Random couple moments
- [ ] Recent favorites

---

## 🎬 VIDEOS

### Adding Videos to "Special Moments"
- [ ] Create MP4 video files in `videos/` folder
- [ ] Create thumbnail images (400x225px) in `images/` folder
- [ ] Open `js/components/videos.js`
- [ ] Update the `videos` array:
  ```javascript
  {
      title: 'Your Video Title',
      description: 'Brief description',
      thumbnail: 'images/thumbnail.jpg',
      src: 'videos/your-video.mp4'
  }
  ```

### Video Format Check:
- [ ] Format: MP4 (required)
- [ ] Codec: H.264 video + AAC audio
- [ ] Size: Under 100MB each
- [ ] Resolution: 720p or higher recommended

### Ideas for Videos:
- [ ] First date highlights
- [ ] Proposal/special moment
- [ ] Vacation compilation
- [ ] Year-in-review montage
- [ ] Love confession/message
- [ ] Surprise video for her

---

## 🎵 MUSIC

### Adding Romantic Playlist
- [ ] Create MP3 files in `audio/` folder
- [ ] Name them: `romantic-1.mp3`, `romantic-2.mp3`, etc.
- [ ] Or open `js/utils/music-player.js`
- [ ] Update playlist array with your songs:
  ```javascript
  { 
      name: 'Song Title', 
      artist: 'Artist Name', 
      file: 'audio/song.mp3',   
      duration: 0 
  }
  ```

### Playlist Ideas (4-6 Songs):
- [ ] "A Thousand Years" - Christina Perri
- [ ] "Perfect" - Ed Sheeran
- [ ] "Make You Feel My Love" - Adele
- [ ] "All of Me" - John Legend
- [ ] "Thinking Out Loud" - Ed Sheeran
- [ ] Your couple's song
- [ ] Instrumental piano piece
- [ ] Classical romantic

---

## 💬 LOVE QUOTES

### Customize Quotes
- [ ] Open `js/components/quotes.js`
- [ ] Replace 20 quotes with your favorites
- [ ] Add personal quotes from messages between you
- [ ] Format: `{ text: "Quote here", author: "Author Name" }`
- [ ] At minimum, replace 5-10 of them

### Ideas:
- [ ] Favorite quotes from movies
- [ ] Song lyrics
- [ ] Things she's said to you
- [ ] Inside jokes
- [ ] Romantic quotes from books
- [ ] Things you wish you'd said to her

---

## 💌 LOVE LETTER

### Write Your Letter
- [ ] Open `js/components/letter.js`
- [ ] Replace the entire `letterContent` with your message
- [ ] Use `\n\n` to separate paragraphs
- [ ] Make it personal and from the heart
- [ ] Recommended length: 300-500 words

### Letter Ideas:
- [ ] How you felt when you first met
- [ ] Favorite memories together
- [ ] How she makes you feel
- [ ] Your dreams for the future
- [ ] What you love most about her
- [ ] How much she means to you
- [ ] Promises for the future

---

## 📅 TIMELINE

### Update Timeline Events
- [ ] Open `js/main.js`
- [ ] Find `showLoveStoryTimeline()` function
- [ ] Update each event with your dates:
  ```javascript
  {
      date: 'January 1, 2021',
      title: 'The First Meeting',
      content: 'Our story began...'
  }
  ```
- [ ] Minimum: 6 events at 6-month intervals
- [ ] Can add more events!

### Timeline Event Ideas:
- [ ] First meeting/date
- [ ] First "I love you"
- [ ] First anniversary
- [ ] First vacation together
- [ ] First major milestone
- [ ] Anniversary date

---

## 🎨 COLORS & DESIGN

### Change Color Scheme (Optional)
- [ ] Open `css/variables.css`
- [ ] Update color variables:
  ```css
  --color-light-pink: #ffb6c1;
  --color-hot-pink: #ff69b4;
  --color-lavender-blush: #fff0f5;
  --color-dark-red: #8b0000;
  --color-gold: #ffd700;
  ```
- [ ] Or use a color picker tool online

### Suggested Color Themes:
- [ ] Rose/Gold/Pink (romantic default)
- [ ] Purple/Lavender/Silver (elegant)
- [ ] Red/White/Gold (classic)
- [ ] Blue/Silver/White (cool)

---

## 🎯 QUIZ CUSTOMIZATION

### Update Quiz Questions
- [ ] Open `js/components/quiz.js`
- [ ] Replace 8 questions with real couple questions:
  ```javascript
  {
      question: "Your question?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,  // Index (0, 1, 2, or 3)
      linkedMemory: 0,   // Index of linked photo
      linkedType: 'memory'  // 'memory' or 'video'
  }
  ```

### Question Ideas:
- [ ] Where did we first meet?
- [ ] What was our first date?
- [ ] What's our song?
- [ ] What's my favorite thing about you?
- [ ] Where should we travel?
- [ ] What makes me smile?
- [ ] How long have we been together?
- [ ] What's our favorite activity?

### Link Correct Answers:
- [ ] Set `linkedMemory` to index of relevant photo/video
- [ ] Set `linkedType` to 'memory' or 'video'
- [ ] When she answers correctly, she'll see that memory!

---

## 🌍 DEPLOYMENT

### Before Deploying:
- [ ] Test all navigation links
- [ ] Verify all images show correctly
- [ ] Test music and video playback
- [ ] Check dark mode toggle
- [ ] Test on mobile (F12 → Toggle Device Toolbar)
- [ ] Check all text is correct
- [ ] Test quiz functionality

### Deploy to Web:
- [ ] Choose hosting: GitHub Pages / Netlify / Web Host
- [ ] Upload all files
- [ ] Test live URL
- [ ] Share link with her!

---

## OPTIONAL ENHANCEMENTS

### Advanced Customizations:
- [ ] Add password protection (requires backend)
- [ ] Change fonts (add custom font files)
- [ ] Add more pages/sections
- [ ] Integrate with email for newsletter
- [ ] Add photo upload functionality
- [ ] Add countdown timer to next anniversary
- [ ] Add secret Easter egg
- [ ] Add "sign the guestbook" feature

---

## FILE CHECKLIST

### JavaScript Files to Modify:
- [ ] `js/main.js` - Homepage hero title + timeline
- [ ] `js/components/quotes.js` - Update quotes
- [ ] `js/components/memories.js` - Add photos
- [ ] `js/components/videos.js` - Add videos
- [ ] `js/components/quiz.js` - Update questions
- [ ] `js/components/letter.js` - Write letter
- [ ] `js/utils/music-player.js` - Add songs

### CSS Files to Modify (Optional):
- [ ] `css/variables.css` - Change colors/fonts

### Images to Add:
- [ ] 6-12 photos in `images/` folder
- [ ] Video thumbnails (400x225px)

### Videos to Add:
- [ ] 3-6 MP4 files in `videos/` folder
- [ ] Each under 100MB

### Audio to Add:
- [ ] 4-6 MP3 files in `audio/` folder
- [ ] Named `romantic-1.mp3` through `romantic-4.mp3`

---

## TESTING CHECKLIST

### Before Sharing:
- [ ] Homepage loads properly
- [ ] Hero title has her name
- [ ] Navigation works (all 6 pages)
- [ ] Photos display correctly
- [ ] Videos play without errors
- [ ] Music player works
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] Quiz displays your questions
- [ ] Quiz scoring works correctly
- [ ] Letter displays correctly
- [ ] Timeline events are accurate
- [ ] All animations work
- [ ] No console errors (F12)
- [ ] Works on mobile (tested in DevTools)

---

## FINAL STEPS

1. [ ] Complete all critical items
2. [ ] Add your photos and videos
3. [ ] Write your love letter
4. [ ] Update your data (names, dates, etc.)
5. [ ] Test everything thoroughly
6. [ ] Deploy to web
7. [ ] Share the link with her
8. [ ] Be ready for her reaction! 💕

---

## NOTES

### Track Your Changes:
Date Started: _______________
Date Completed: _______________
Total Photos Added: _______________
Total Videos Added: _______________
Total Songs Added: _______________

### Special Moments You Want to Remember:
- Her reaction when she opens it
- Her favorite part
- Questions she asks
- Ideas for next version

---

**Good Luck! You've got this!** 💕✨
