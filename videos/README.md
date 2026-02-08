# Videos Folder

## Adding Your Videos

Place your special moment videos in this folder. These will play in the custom video player.

### Recommended Specifications:
- **Format**: MP4 (best compatibility across browsers)
- **Codec**: H.264 video, AAC audio
- **Resolution**: 1080p (1920x1080) or 720p (1280x720)
- **Size**: Keep under 100MB per video
- **Bitrate**: 3000-5000 kbps for good quality
- **Frame Rate**: 24-30 fps

### How to Update:

1. Add your video files to this folder (e.g., `first-date.mp4`)
2. Create thumbnail images (400x225px) and put in `images/` folder
3. Open `js/components/videos.js`
4. Find the `videos` array
5. Add your video:
   ```javascript
   {
       title: 'First Date Highlights',
       description: 'Memorable moments from our first date',
       thumbnail: 'images/first-date-thumb.jpg',
       src: 'videos/first-date.mp4'
   }
   ```

### Creating Thumbnails:
1. Extract a frame from your video at a good moment
2. Resize to 400x225px
3. Save as JPEG
4. Put in `images/` folder

### Video Conversion Tools:
- **HandBrake** (Free, recommended)
- **FFmpeg** (Command line, powerful)
- **Online**: CloudConvert.com, Convertio.co
- **Mac**: QuickTime Player

### FFmpeg Command Example:
```bash
ffmpeg -i input.mov -c:v libh264 -c:a aac -crf 23 output.mp4
```

### Example Video Ideas:
- First date highlights
- Proposal or special moment
- Vacation memories
- Date night compilations
- Love confession
- Surprise video
- Year-in-review montage
- Future dreams video

### Video Player Features:
- Play/pause
- Volume control
- Progress bar with seek
- Fullscreen mode
- Keyboard shortcuts:
  - Space: Play/pause
  - ← →: Seek ±5 seconds
  - F: Fullscreen
  - Esc: Close

---

**Note**: Currently the website uses placeholder structure. Add your actual MP4 videos following the instructions above.
