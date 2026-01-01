# Quick Setup Guide for GitHub Pages

## Step 1: Initialize Git Repository (if not already done)

```bash
cd nextjs-app
git init
git add .
git commit -m "Initial commit"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., `ifc-website`)
3. **DO NOT** initialize with README, .gitignore, or license

## Step 3: Connect and Push

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the changes

## Step 5: Deploy

The GitHub Actions workflow will automatically:
- Build your Next.js app
- Deploy it to GitHub Pages
- Make it available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Check Deployment Status

1. Go to the **Actions** tab in your repository
2. You should see the workflow running
3. Once complete (green checkmark), your site is live!

## Troubleshooting

- **Workflow not running?** Make sure you pushed to `main` or `master` branch
- **404 errors?** Wait a few minutes for GitHub Pages to propagate
- **Build fails?** Check the Actions tab for error details

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
# The static files are in the 'out' directory
# Push the 'out' directory contents to gh-pages branch
```

