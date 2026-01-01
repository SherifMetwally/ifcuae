# GitHub Pages Deployment Guide

This Next.js app is configured for deployment to GitHub Pages.

## Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the `main` or `master` branch.

### Setup Steps:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

3. **Push Your Code**
   - The workflow will automatically trigger on push to `main` branch
   - Check the **Actions** tab to see the deployment progress
   - Once complete, your site will be available at:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the static site**
   ```bash
   npm run build
   ```

2. **The output will be in the `out` directory**

3. **Deploy to GitHub Pages**
   - Push the `out` directory to the `gh-pages` branch
   - Or use a tool like `gh-pages` package:
     ```bash
     npm install --save-dev gh-pages
     ```
     Add to package.json scripts:
     ```json
     "deploy": "npm run build && gh-pages -d out"
     ```
     Then run:
     ```bash
     npm run deploy
     ```

## Custom Domain

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings as per GitHub Pages documentation

## Important Notes

- The site is configured for static export (no server-side features)
- Images are unoptimized for GitHub Pages compatibility
- All routes use trailing slashes
- The base path is set to root (`/`)

## Troubleshooting

- **404 errors**: Make sure `trailingSlash: true` is set in `next.config.ts`
- **Images not loading**: Check that image paths are correct (should start with `/img/`)
- **Build fails**: Check the Actions tab for error messages

