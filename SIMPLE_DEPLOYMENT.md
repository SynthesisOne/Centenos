# Simple Deployment Guide for Centeno's Website

## 🚀 Easy 2-Step Deployment Process

### Step 1: Push Changes to GitHub (Run on your local Mac)

Open Terminal and run these commands one by one:

```bash
cd "Centeno's Website Project"
git add .
git commit -m "Add deployment script and latest changes"
git push origin main
```

### Step 2: Update Your Digital Ocean Server

1. **Connect to your server:**
   ```bash
   ssh root@129.212.181.209
   ```

2. **Update the website:**
   ```bash
   cd ~/Centenos
   git pull origin main
   pm2 restart centenos-hvac
   ```

3. **Check if it's working:**
   ```bash
   pm2 status
   ```

## ✅ That's it! Your website is now updated!

Visit: **http://129.212.181.209:3000**

---

## 🔄 For Future Updates

Whenever you make changes to your website:

1. **On your Mac:** Run the 3 git commands from Step 1
2. **On your server:** Run the 3 commands from Step 2

## 📱 Quick Reference

- **Your GitHub repo:** https://github.com/SynthesisOne/Centenos
- **Your live website:** http://129.212.181.209:3000
- **Metal Fabrication page:** http://129.212.181.209:3000/metal-fabrication.html

## 🆘 If Something Goes Wrong

1. Check PM2 status: `pm2 status`
2. View logs: `pm2 logs centenos-hvac`
3. Restart if needed: `pm2 restart centenos-hvac`
