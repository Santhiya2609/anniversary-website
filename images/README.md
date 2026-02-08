# Images Folder

## Adding Your Photos

Place your anniversary photos in this folder. The website currently uses placeholder images (via placeholder.com) that you can replace.

### Recommended Specifications:
- **Format**: JPG (for photos) or PNG (for graphics)
- **Size**: 500KB or smaller per image
- **Dimensions**: Consistent aspect ratio (4:3 or square)
- **Resolution**: 1200px width minimum for best quality

### How to Update:

1. Add your photos to this folder
2. Open `js/components/memories.js`
3. Find the `memories` array
4. Replace the `src` path with your image filename:
   ```javascript
   { 
       src: 'images/your-photo-name.jpg',
       date: 'January 15, 2021',
       caption: 'Your moment description'
   }
   ```

### Photo Organization Tips:
- Name files chronologically: `2021-01-15-beach.jpg`
- Keep originals in a backup folder
- Use consistent naming convention
- Compress images using TinyPNG.com

### Example Images:
- Selfies together
- Date photos
- Vacation pictures
- Special moments
- Anniversary celebrations
- Candid moments

---

**Note**: Currently the website uses placeholder images. Replace these with your actual photos following the instructions above.
