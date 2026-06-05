# 💕 Surprise Website for Seti

A romantic, animated website celebrating your love story built with **React**, **Vite**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Features

- **Landing Page** - A beautiful welcome with your name and a romantic message
- **Our Story** - Timeline of your special moments
  - When you got closer
  - First hug
  - First cheek kiss
- **Reasons I Love You** - Click through 50+ reasons why
  - Progress counter
  - Smooth animations
  - "Infinite more reasons" final message
- **Stopwatch** - Counts days, months, and years since you got closer
- **Floating Hearts** - Ambient animation throughout
- **Typewriter Effect** - Elegant text animations
- **Responsive Design** - Perfect on all devices
- **Dark Theme** - Beautiful dark UI with rose/pink gradients

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static files)
npm run build
```

## 🌐 Deployment to GitHub Pages

### Option 1: Automated (GitHub Actions)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to `main` branch - workflow runs automatically!

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Copy dist/ contents to your GitHub Pages branch
# Or use gh-pages package:
npm install --save-dev gh-pages

# Then in package.json, add:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

## 📝 Customization

### Edit Your Story

**Timeline (`src/data/timeline.json`):**
```json
{
  "timeline": [
    {
      "id": 1,
      "title": "Moment Name",
      "date": "1404-11-09",
      "description": "Description here",
      "icon": "💫"
    }
  ]
}
```

**Reasons (`src/data/reasons.json`):**
```json
{
  "reasons": [
    "Reason 1",
    "Reason 2",
    // Add up to 100+ reasons
  ]
}
```

### Change Dates
- Update the start date in `src/components/Stopwatch.jsx` (Persian calendar format: YYYY-MM-DD)
- Update timeline dates in `src/data/timeline.json`

### Customize Colors
Edit `tailwind.config.js` to change the rose/pink theme to your preferred colors.

## 📂 Project Structure

```
src/
├── components/
│   ├── Landing.jsx          - Homepage with intro
│   ├── OurStory.jsx         - Timeline section
│   ├── ReasonsILoveYou.jsx  - Reasons counter
│   ├── Stopwatch.jsx        - Time elapsed
│   ├── Navigation.jsx       - Nav bar
│   ├── ThemeToggle.jsx      - Theme switcher
│   ├── FloatingHearts.jsx   - Ambient animation
│   └── TypeWriter.jsx       - Text effect
├── data/
│   ├── reasons.json         - 50+ reasons
│   └── timeline.json        - Story moments
├── utils/
│   └── dateUtils.js         - Date calculations
├── App.jsx                  - Main app
└── index.css               - Global styles
```

## 💻 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool (super fast)
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Persian Calendar Support** - Jalali date handling

## 🎨 Animations

- Floating hearts
- Typewriter text effect
- Smooth page transitions
- Button hover effects
- Progress bar animations
- Timeline entry animations

## 📱 Mobile Responsive

Fully optimized for:
- Mobile phones (320px+)
- Tablets
- Desktop

## 🔒 Security Note

This is a static website. No sensitive data is stored or transmitted. All content is client-side rendered.

## 📄 License

Created with ❤️. Feel free to customize and deploy!

## 🎁 Made with Love

For Seti ❤️

---

**Questions?** Refer to the individual component files for more details. Each component is well-commented and self-contained.

Enjoy your love story website! 🚀💕
