# ☁️ How to Deploy to Cloudflare Pages

Since your project is configured as a static export (`output: 'export'` in `next.config.js`), deploying to Cloudflare Pages is extremely simple and free!

## Step 1: Push to GitHub
Ensure your latest code is pushed to GitHub (which we just did!).
- **Repo URL**: `https://github.com/aadithya-vimal/ArtisanalCoffee`

## Step 2: Cloudflare Dashboard
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Go to **Workers & Pages** in the sidebar.
3. Click **Create Application**.
4. Switch to the **Pages** tab.
5. Click **Connect to Git**.

## Step 3: Configure Project
1. Select your GitHub account and choose the **ArtisanalCoffee** repository.
2. Click **Begin setup**.
3. Use the following build settings:
   - **Project Name**: `artisanal-coffee` (or whatever you prefer)
   - **Production Branch**: `main`
   - **Framework Preset**: select **Next.js (Static HTML Export)**
   - **Build command**: `npm run build`
   - **Build output directory**: `out`

   > **Note:** Because we have `output: 'export'` in `next.config.js`, Next.js creates an `out` folder with static files instead of the usual `.next` folder.

## Step 4: Deploy
1. Click **Save and Deploy**.
2. Cloudflare will clone your repo, install dependencies, run the build, and deploy your site.
3. Once finished, you'll get a unique URL (e.g., `https://artisanal-coffee.pages.dev`).

## 🎉 Success!
Your site is now live globally on Cloudflare's edge network!
