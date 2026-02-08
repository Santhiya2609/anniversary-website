# 🌍 DEPLOYMENT GUIDE - Deploy Your Anniversary Website

## Quick Deployment Options (Choose One)

### ⭐ **EASIEST: Netlify (5 minutes)**

1. Go to [Netlify.com](https://netlify.com)
2. Sign up (free with GitHub account)
3. Click "New site from Git"
4. Connect your GitHub repo
5. Deploy automatically on every push
6. **Live URL**: yourname.netlify.app

✅ **Best for**: Beginners, automatic updates, free SSL

---

### ⭐ **EASIEST: GitHub Pages (3 minutes)**

1. Push your code to GitHub
2. Go to Settings → Pages
3. Select "Deploy from branch" → main branch
4. Save
5. **Live URL**: username.github.io/ESweb

✅ **Best for**: Free forever, no setup needed

---

### ⭐ **POPULAR: Vercel (3 minutes)**

1. Go to [Vercel.com](https://vercel.com)
2. Sign up (free)
3. Import from GitHub
4. Click Deploy
5. **Live URL**: yourproject.vercel.app

✅ **Best for**: Fast, simple, free

---

### 💼 **TRADITIONAL: Any Web Host (FTP Upload)**

1. Get hosting (GoDaddy, Bluehost, Namecheap, etc.)
2. Download FileZilla (free FTP client)
3. Upload all files to public_html folder
4. **Live URL**: youromain.com

✅ **Best for**: Custom domain, long-term stability

---

### 🖥️ **SELF-HOSTED: Your Own Server**

For hosting on your own machine or VPS:

1. Get a VPS (DigitalOcean, Linode, AWS, etc.)
2. Run the Node.js server (see server.js)
3. Use Cloudflare for DNS
4. **Live URL**: your-ip-address or custom domain

✅ **Best for**: Full control, learning experience

---

## Step-by-Step Deployment

### Option 1: GitHub Pages (Recommended for Beginners)

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Anniversary website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ESweb.git
git push -u origin main
```

#### Step 2: Enable Pages
1. Go to your repo on GitHub
2. Click Settings
3. Scroll to "Pages" section
4. Under "Build and deployment":
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
5. Click Save

#### Step 3: Visit Your Site
Your website is live at: `https://YOUR_USERNAME.github.io/ESweb`

✅ Free, automatic, secure SSL certificate

---

### Option 2: Netlify (Best for Beginners)

#### Step 1: Connect Repository
1. Go to [Netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub (or GitLab/Bitbucket)
4. Authorize Netlify
5. Select your ESweb repository

#### Step 2: Configure Deploy
- Build command: (leave empty)
- Publish directory: ./
- Environment variables: (none needed)

#### Step 3: Deploy
Click "Deploy site" and wait 1-2 minutes

✅ Your site is live at `https://[project-name].netlify.app`

---

### Option 3: Vercel (Fastest)

#### Step 1: Import
1. Go to [Vercel.com](https://vercel.com)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub URL
5. Click Import

#### Step 2: Deploy
Click "Deploy" and wait 30 seconds

✅ Your site is live at `https://[project-name].vercel.app`

**Bonus**: Vercel automatically previews every commit!

---

### Option 4: Traditional Web Host (GoDaddy, Bluehost, etc.)

#### Step 1: Get Hosting
- Sign up for web hosting (usually $3-10/month)
- Get a domain name (usually $10-15/year)
- Receive FTP credentials

#### Step 2: Download FileZilla
1. Download [FileZilla](https://filezilla-project.org/) (free)
2. Install it

#### Step 3: Connect via FTP
1. File → Site Manager
2. New Site
3. Enter FTP details from your host:
   - **Host**: ftp.yourdomain.com
   - **Username**: Your FTP username
   - **Password**: Your FTP password
4. Connect

#### Step 4: Upload Files
1. Left side: Find your local ESweb folder
2. Right side: Navigate to public_html
3. Drag and drop all files to public_html
4. Done!

✅ Your site is live at `https://yourdomain.com`

---

### Option 5: Self-Host on Your Computer/Server

#### Step 1: Install Node.js
Download from [nodejs.org](https://nodejs.org) (LTS version)

#### Step 2: Run the Server
```bash
# Navigate to your ESweb folder
cd c:\Users\z049339\Personal\ESweb

# Run the server (server.js is included)
node server.js
```

#### Step 3: Access Locally
Open: `http://localhost:3000`

#### Step 4: Make it Public (Optional)
Use Cloudflare Tunnels (free):
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select Tunnels
3. Create a tunnel to localhost:3000
4. Get a public URL

✅ Your site is live at `https://your-tunnel.trycloudflare.com`

---

## File Uploads Checklist

Make sure these files/folders are uploaded:

```
ESweb/
├── ✅ index.html
├── ✅ server.js (if self-hosting)
├── ✅ package.json (if using Node.js)
├── ✅ css/ (folder with all CSS files)
├── ✅ js/ (folder with all JavaScript files)
├── ✅ images/ (folder with your photos)
├── ✅ videos/ (folder with your videos)
├── ✅ audio/ (folder with your music)
└── ✅ .htaccess (for Apache servers)
```

---

## Custom Domain Setup

### Add Your Domain

#### GitHub Pages
1. Go to Settings → Pages
2. Under "Custom domain"
3. Enter your domain: `anniversary.com`
4. Create a CNAME file (Netlify does this automatically)

#### Netlify
1. Go to Settings → Domain settings
2. Add custom domain
3. Follow DNS instructions

#### Namecheap / GoDaddy / Domain Registrar
1. Go to DNS settings
2. Add CNAME record:
   - Name: www
   - Value: your-site-name.netlify.app (or GitHub Pages URL)
3. Wait 5-10 minutes for DNS to propagate

### Example Custom Domain
Instead of: `https://username.github.io/ESweb`
Get: `https://our-anniversary.com`

---

## Verify It Works Everywhere

### Test from Different Devices

1. **Mobile Phone**: Open the URL on your phone
2. **Tablet**: Test on a tablet
3. **Different Browser**: Try Firefox, Safari, Edge
4. **Different OS**: Test on Windows, Mac, Linux
5. **Different Networks**: Try different WiFi networks

### Check Performance

Go to [GTmetrix.com](https://gtmetrix.com):
1. Enter your URL
2. Check page speed
3. View suggestions for optimization

---

## SSL Certificate (HTTPS)

Important: Always use HTTPS (lock icon 🔒)

✅ **GitHub Pages**: Automatic SSL
✅ **Netlify**: Automatic SSL
✅ **Vercel**: Automatic SSL
✅ **Traditional Hosting**: Usually free with control panel

🔴 Never share unencrypted HTTP links

---

## Backup Your Work

### Option 1: GitHub
```bash
git push origin main
```

### Option 2: Zip File
1. Right-click ESweb folder
2. Send to → Compressed folder
3. Save to cloud (OneDrive, Google Drive, Dropbox)

### Recommendation
Use both: Git for version control + Cloud for backup

---

## Troubleshooting Deployment

### Problem: Files Not Uploading
- Check file permissions
- Verify FTP credentials
- Try uploading one file at a time
- Check folder structure matches

### Problem: Site Shows 404
- Check index.html is in root folder
- Verify CSS/JS file paths
- Check case sensitivity (important on Linux servers)
- Verify all files uploaded

### Problem: Images/Videos Not Loading
- Check image/video folder names
- Verify paths in JS files
- Make sure files are in correct folders
- Check file permissions (readable)

### Problem: CSS/JS Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths are relative (not absolute)
- Verify files uploaded to correct folders
- Try from different browser

### Problem: Music Player Not Working
- Check audio file paths
- Verify .mp3 files are in audio/ folder
- Check browser console for errors (F12)
- Try different audio format

---

## Share the Link

Once deployed, share with her!

```
Hey! I built you something special for our anniversary.
Check it out: https://your-website-url.com

Enjoy! 💕
```

---

## Monitor Your Site

### Check Uptime
- Uptimerobot.com (free monitoring)
- PingDom (paid monitoring)

### Track Visitors
- Google Analytics (free)
- Netlify Analytics (built-in)

### Get Alerts
- Receive notifications if site goes down
- Email alerts for errors

---

## Update Your Site

### GitHub Pages / Netlify / Vercel
Just push to GitHub:
```bash
git add .
git commit -m "Updated quotes"
git push origin main
```

Updates deploy automatically! ⚡

### FTP Upload
1. Connect via FileZilla
2. Replace files
3. Done!

---

## Cost Breakdown

| Option | Cost | Best For |
|--------|------|----------|
| GitHub Pages | Free | Beginners |
| Netlify | Free | Simple |
| Vercel | Free | Fast |
| Linode VPS | $5/mo | Self-hosting |
| GoDaddy Hosting | $3-10/mo | Custom domain |
| Domain name | $10-15/yr | Branding |
| **Total** | **Free-50/yr** | **Your choice!** |

---

## Recommended Setup

### Absolute Beginner: ⭐⭐⭐
1. **Netlify Free**
2. **GitHub for version control**
3. **Total cost**: Free forever

### Want Custom Domain: ⭐⭐
1. Netlify Free
2. Namecheap domain ($8/yr)
3. Total cost: $8/year

### Want Full Control: ⭐
1. Linode VPS ($5/mo)
2. Cloudflare DNS (free)
3. node server.js
4. Total cost: $60/year

---

## Support & Help

### Getting Help
1. Check site status: [status.github.com](https://status.github.com)
2. Netlify support: Support chat in dashboard
3. Vercel support: Discussion forums
4. Stack Overflow: Search common issues

### Common Commands
```bash
# Check if Node is installed
node --version

# Start local server
npm start

# Deploy to GitHub
git push origin main

# Clear cache
npm cache clean --force
```

---

## NEXT STEPS

1. ✅ Choose a deployment option (Netlify recommended)
2. ✅ Follow the steps above
3. ✅ Test the URL works
4. ✅ Share with her!
5. ✅ Celebrate! 🎉

---

**Your anniversary website is now ready to share with the world!** 🌍💕

Questions? Check the README.md or TECHNICAL.md files.

Created: February 8, 2026
