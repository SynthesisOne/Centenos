#!/bin/bash

# Enhanced deployment script for Centeno's Website
# This script pushes changes to GitHub and automatically deploys to DigitalOcean

set -e  # Exit on any error

echo "🚀 Starting automated deployment process..."
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the correct project directory"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Check if there are any changes to commit
if git diff --quiet && git diff --staged --quiet; then
    echo "ℹ️  No changes detected to commit"
    read -p "Do you want to proceed with deployment anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Deployment cancelled"
        exit 0
    fi
else
    echo "📦 Changes detected, preparing to commit..."
    
    # Show what will be committed
    echo "Files to be committed:"
    git status --porcelain
    echo
    
    # Add all changes to git
    echo "📝 Adding changes to git..."
    git add .
    
    # Allow custom commit message
    read -p "Enter commit message (or press Enter for default): " commit_msg
    if [ -z "$commit_msg" ]; then
        commit_msg="Update website - $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "$commit_msg"
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
if git push origin main; then
    echo "✅ Successfully pushed to GitHub"
else
    echo "❌ Failed to push to GitHub"
    echo "Please check your internet connection and GitHub credentials"
    exit 1
fi

# Deploy to Digital Ocean
echo ""
echo "📡 Deploying to Digital Ocean server..."
echo "Connecting to server: 129.212.181.209"

# Enhanced SSH deployment with better error handling
ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=no root@129.212.181.209 << 'EOF'
set -e

echo "🔄 Connected to DigitalOcean server"
echo "📂 Navigating to project directory..."

if [ ! -d "~/Centenos" ]; then
    echo "❌ Project directory not found!"
    exit 1
fi

cd ~/Centenos

echo "📥 Pulling latest changes from GitHub..."
if git pull origin main; then
    echo "✅ Successfully pulled changes"
else
    echo "❌ Failed to pull changes from GitHub"
    exit 1
fi

echo "🔄 Restarting application with PM2..."
if pm2 restart centenos-hvac; then
    echo "✅ Application restarted successfully"
else
    echo "⚠️  PM2 restart failed, trying to start..."
    pm2 start server.js --name centenos-hvac
fi

echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Website is live at: http://129.212.181.209:3000"
echo "🌐 If you have a domain: https://your-domain.com"
EOF

deployment_status=$?

echo ""
echo "================================================"
if [ $deployment_status -eq 0 ]; then
    echo "🎉 DEPLOYMENT SUCCESSFUL!"
    echo ""
    echo "Your website has been updated and is now live!"
    echo "🌐 Visit: http://129.212.181.209:3000"
    echo ""
    echo "Recent changes deployed:"
    git log --oneline -5
else
    echo "❌ DEPLOYMENT FAILED!"
    echo ""
    echo "The push to GitHub was successful, but the server deployment failed."
    echo "You may need to manually SSH into the server to investigate."
    echo ""
    echo "Manual deployment commands:"
    echo "ssh root@129.212.181.209"
    echo "cd ~/Centenos"
    echo "git pull origin main"
    echo "pm2 restart centenos-hvac"
fi

echo "================================================"
