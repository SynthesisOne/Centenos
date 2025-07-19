#!/bin/bash

# Simple deployment script for Centeno's Website
echo "🚀 Starting deployment to Digital Ocean..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the correct project directory"
    exit 1
fi

# Add all changes to git
echo "📦 Adding changes to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit changes with timestamp
    echo "💾 Committing changes..."
    git commit -m "Update website - $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to GitHub
    echo "⬆️  Pushing to GitHub..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully pushed to GitHub"
    else
        echo "❌ Failed to push to GitHub"
        exit 1
    fi
fi

echo "🎉 Deployment completed successfully!"
echo ""
echo "Next steps:"
echo "1. SSH into your Digital Ocean server: ssh root@129.212.181.209"
echo "2. Navigate to project: cd ~/Centenos"
echo "3. Pull changes: git pull origin main"
echo "4. Restart website: pm2 restart centenos-hvac"
echo ""
echo "Your website will be live at: http://129.212.181.209:3000"
