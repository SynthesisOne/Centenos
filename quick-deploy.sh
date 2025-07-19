#!/bin/bash

# Quick deployment script - no prompts, just deploy
# Use this when you want to quickly push changes with a default commit message

echo "⚡ Quick Deploy - Centeno's Website"
echo "=================================="

# Add all changes and commit with timestamp
git add .
git commit -m "Quick update - $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

# Push and deploy
git push origin main

# Deploy to server
ssh -o ConnectTimeout=10 root@129.212.181.209 << 'EOF'
cd ~/Centenos
git pull origin main
pm2 restart centenos-hvac
echo "✅ Quick deployment complete!"
EOF

echo "🎉 Done! Website updated at http://129.212.181.209:3000"
