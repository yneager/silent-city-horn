# 🚀 Vercel Deployment Guide - Silent City Horn

This guide will help you deploy your Silent City Horn website to Vercel in just 3 minutes!

## Step 1: Create a Vercel Account (1 minute)

1. Go to **https://vercel.com**
2. Click **"Sign Up"** in the top right
3. Choose **"Continue with GitHub"**
4. You'll be redirected to GitHub to authorize Vercel
5. Click **"Authorize Vercel"**
6. Complete the signup process on Vercel

## Step 2: Import Your GitHub Repository (1 minute)

1. After signing up, you'll see the Vercel dashboard
2. Click **"Add New..."** button (top right)
3. Select **"Project"**
4. Under "Import Git Repository", look for **"yneager/silent-city-horn"**
5. If you don't see it, click **"Search for a repository"** and search for "silent-city-horn"
6. Click **"Import"**

## Step 3: Configure Project Settings (30 seconds)

1. **Project Name:** `silent-city-horn` (or your preferred name)
2. **Framework Preset:** Select **"Other"** (since we're using Express.js)
3. **Root Directory:** Leave as `./`
4. **Build Command:** Leave empty (or set to `npm install`)
5. **Output Directory:** Leave as default
6. **Environment Variables:** Leave empty for now

## Step 4: Deploy! (30 seconds)

1. Click **"Deploy"** button
2. Vercel will start building and deploying your project
3. Wait for the build to complete (usually 1-2 minutes)
4. You'll see a success message with your live URL!

## Step 5: Get Your Permanent URL

Once deployment is complete, Vercel will give you a URL like:
```
https://silent-city-horn.vercel.app
```

This is your **permanent website URL**! 🎉

## Bonus: Connect a Custom Domain

If you want to use your own domain (like `www.silentcityhorn.com`):

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter your domain name
5. Follow the DNS configuration instructions
6. Your custom domain will be live in a few minutes!

## Automatic Deployments

Every time you push code to GitHub, Vercel will automatically deploy the latest version! 

To update your website:
```bash
git add .
git commit -m "Your changes"
git push origin master
```

## Troubleshooting

### Build Failed?
- Check that `package.json` exists in the root directory
- Verify `server.js` is in the root directory
- Make sure all dependencies are listed in `package.json`

### Website Shows 404?
- Vercel might need to rebuild
- Try refreshing the page after a few seconds
- Check the Vercel dashboard for build logs

### Need Help?
- Vercel Documentation: https://vercel.com/docs
- GitHub Repository: https://github.com/yneager/silent-city-horn
- Contact: info@silentcityhorn.com

---

**That's it! Your Silent City Horn website is now live on the internet! 🌍**

Share your permanent URL with anyone and they can access your website from anywhere in the world.
