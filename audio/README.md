# Audio Folder

## Adding Romantic Playlist

Place your romantic background music files in this folder. The website comes with a music player that can play a playlist.

### Recommended Specifications:
- **Format**: MP3 (best compatibility)
- **Bitrate**: 128-192 kbps (good quality at smaller file size)
- **Size**: Keep under 20MB per song
- **Sample Rate**: 44.1 kHz standard

### How to Update:

1. Add your music files to this folder
2. Open `js/utils/music-player.js`
3. Find the `playlist` array
4. Add your songs:
   ```javascript
   { 
       name: 'Song Title', 
       artist: 'Artist Name', 
       file: 'audio/your-song.mp3', 
       duration: 0 
   }
   ```

### Getting Romantic Music:
- Royalty-free: Bensound.com, Incompetech.com
- Streaming: Get MP3s from YouTube (via youtube-mp3.download)
- Your favorites: Rip from your Spotify/Apple Music playlist
- Original: Record your own!

### Audio Conversion:
- **Audacity** (Free, easy to use)
- **FFmpeg** (Command line)
- **Online**: CloudConvert.com

### FFmpeg MP3 Conversion:
```bash
ffmpeg -i input.wav -b:a 192k output.mp3
```

### Music Player Features:
- Play/pause
- Previous/next track
- Volume control
- Progress bar with seek
- Track information display
- Minimize/expand
- Runs in background

### Romantic Music Ideas:
- "A Thousand Years" - Christina Perri
- "Perfect" - Ed Sheeran
- "At Last" - Etta James
- "The Wedding Song" - Paul Stookey
- "Make You Feel My Love" - Adele
- "Thinking Out Loud" - Ed Sheeran
- "All of Me" - John Legend
- "Falling Slowly" - Glen Hansard
- Your couple's song
- Instrumental romantic pieces
- Piano covers
- Classical romance

### Naming Convention:
- `romantic-1.mp3`
- `romantic-2.mp3`
- `romantic-3.mp3`
- `romantic-4.mp3`

Or more descriptively:
- `perfect-ed-sheeran.mp3`
- `a-thousand-years.mp3`
- `our-song.mp3`

### Default Playlist:
The website expects these files:
- `audio/romantic-1.mp3`
- `audio/romantic-2.mp3`
- `audio/romantic-3.mp3`
- `audio/romantic-4.mp3`

---

**Tip**: The music player defaults to 30% volume for ambiance without being overwhelming. Users can adjust as needed.
