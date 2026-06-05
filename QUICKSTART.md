# 💕 Quick Start Guide - Her Surprise Website

## What You Have

A fully functional, animated love story website for Seti with:
- ✨ Beautiful landing page with your name
- 📖 Timeline of 3 special moments
- ❤️ 50+ clickable reasons why you love her
- ⏱️ Stopwatch counting time together
- 💫 Floating hearts and smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Ready to deploy to GitHub Pages

## Project Structure

```
her-surprise/
├── src/
│   ├── components/        # React components
│   │   ├── Landing.jsx
│   │   ├── OurStory.jsx
│   │   ├── ReasonsILoveYou.jsx
│   │   ├── Stopwatch.jsx
│   │   ├── Navigation.jsx
│   │   ├── FloatingHearts.jsx
│   │   └── TypeWriter.jsx
│   ├── data/
│   │   ├── reasons.json   # 50+ reasons (EDIT THIS!)
│   │   └── timeline.json  # Your story moments (EDIT THIS!)
│   ├── utils/
│   │   └── dateUtils.js   # Date calculations
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml     # Auto-deploy to GitHub Pages
├── dist/                  # Built static files (ready to deploy)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── README.md
└── DEPLOYMENT.md
```

## 🎨 Customize Your Content

### 1. Edit Your Reasons

**File:** `src/data/reasons.json`

```json
{
  "reasons": [
    "Because you make me smile",
    "Your laugh is my favorite sound",
    "You are my favorite person",
    // Add 50+ more reasons
  ]
}
```

### 2. Edit Your Timeline

**File:** `src/data/timeline.json`

```json
{
  "timeline": [
    {
      "id": 1,
      "title": "We Got Closer ❤️",
      "date": "1404-11-09",
      "description": "The day everything changed",
      "icon": "💫"
    },
    // Add more moments
  ]
}
```

### 3. Change Colors/Theme

**File:** `tailwind.config.js`

Change the color palette from rose/pink to your preference.

## 🚀 Deploy in 3 Steps

### Step 1: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit: Our love story website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/her-surprise.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **/root**
4. Click **Save**

### Step 3: Done! 🎉

Your site is live at: `https://YOUR_USERNAME.github.io/her-surprise/`

The GitHub Actions workflow (in `.github/workflows/deploy.yml`) automatically builds and deploys every time you push!

## 📝 Local Development

```bash
# Install dependencies (one time)
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build
# Creates optimized static files in dist/
```

## 🔧 Common Customizations

### Change Start Date

**File:** `src/components/Stopwatch.jsx` (line 7)

```javascript
const START_DATE = '1404-11-09'; // Change this
```

### Add More Timeline Moments

Add to `src/data/timeline.json`:

```json
{
  "id": 4,
  "title": "Another Special Day",
  "date": "1405-12-15",
  "description": "Description here",
  "icon": "💝"
}
```

### Customize Animations

Edit component files like:
- `src/components/Landing.jsx`
- `src/components/FloatingHearts.jsx`
- `src/components/ReasonsILoveYou.jsx`

All use **Framer Motion** for animations.

## 🎯 Next Steps

1. **Customize content** in `src/data/`
2. **Test locally**: `npm run dev`
3. **Commit & push** to GitHub
4. **Share the link** with Seti! 💕

## 💡 Pro Tips

✨ **Add your own music:**
- Place MP3 in `public/audio/`
- Import in a component and play with audio controls

🎨 **Change animation speed:**
- Edit `transition` values in components
- Search for `transition={{ duration: X }}`

📸 **Add a photo:**
- Create `public/photos/`
- Add `<img>` tags in components

🔒 **Password protect (advanced):**
- Add password check in `src/App.jsx` before rendering content

## 📚 Documentation

- **Full README:** See `README.md`
- **Deployment options:** See `DEPLOYMENT.md`
- **Tech Stack:** React 18, Vite, Tailwind CSS, Framer Motion

## ❤️ Enjoy!

Your surprise website is ready to wow Seti with your love story, animated memories, and 50+ heartfelt reasons why she's everything to you.

Made with ❤️ for Seti

---

**Questions?** Check the comments in component files - they're well-documented!
