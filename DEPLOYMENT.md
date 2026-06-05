# 🚀 Deployment Guide for GitHub Pages

## Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your site every time you push to the `main` branch.

### Setup Steps:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/her-surprise.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **Deploy from a branch**
     - Branch: Select **gh-pages** and **/root**
     - Click **Save**

3. **That's it!** 
   - The workflow runs automatically on each push
   - Your site deploys to `https://YOUR_USERNAME.github.io/her-surprise/`

## Option 2: Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to `package.json`:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## Option 3: Custom Domain

### Using a Custom Domain (e.g., seti.example.com):

1. **Update the CNAME file:**
   - Create/edit `.github/workflows/deploy.yml`
   - Uncomment the `cname:` line:
     ```yaml
     cname: seti.example.com
     ```

2. **Configure DNS:**
   - Add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
   - Or add an `A` record pointing to GitHub's IP addresses

3. **Enable HTTPS:**
   - GitHub automatically provides SSL/TLS certificates

## Option 4: Deploy to Vercel (Alternative)

Vercel makes it even easier:

1. **Push to GitHub** (if not already)

2. **Visit [vercel.com](https://vercel.com)**
   - Sign in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Custom Domain:**
   - Add your custom domain in Vercel dashboard
   - Update DNS records

## 📊 Build & Deploy Info

- **Build size:** ~260KB (84KB gzipped)
- **Build time:** ~1.5 seconds
- **Deployment time:** ~30 seconds (GitHub Actions)
- **Static files:** No server required
- **CDN:** Automatically served via GitHub Pages CDN

## ✅ Verification

After deployment, check that everything works:

1. Visit your live URL
2. Check all sections load correctly
3. Test animations and interactions
4. Try on mobile devices

## 🔧 Troubleshooting

**Site not showing up?**
- Wait 5 minutes for GitHub Pages to process
- Check that `gh-pages` branch exists
- Verify branch is set correctly in Settings → Pages

**Wrong base path?**
- If deploying to `https://username.github.io/her-surprise/`
- The `vite.config.js` already has `base: '/her-surprise/'`
- For personal site at `https://username.github.io/`:
  - Update `vite.config.js`: `base: '/'`
  - Rebuild: `npm run build`

**Need to update content?**
1. Edit files in `src/data/` (reasons, timeline)
2. Commit and push: `git add . && git commit -m "Update content" && git push`
3. GitHub Actions automatically rebuilds and deploys

## 📝 Environment Variables

No environment variables needed! This is a completely client-side application.

## 🎉 You're Live!

Your surprise website is now on the internet! Share the link with your special someone. ❤️

---

**Need help?** Check GitHub's official guides:
- https://docs.github.com/en/pages
- https://github.com/peaceiris/actions-gh-pages
