#!/bin/bash

# Interview Prep - Deploy to GitHub Pages
# This script builds the Next.js static site to docs/ folder for GitHub Pages

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Step 1: Clean docs folder (except .gitkeep)
echo "🗑️  Cleaning docs/ folder..."
find docs -mindepth 1 ! -name '.gitkeep' -delete 2>/dev/null || rm -rf docs/*

# Step 2: Build Next.js static export
echo "📦 Building Next.js static site..."
npm run build:static

# Step 3: Verify build output
echo "✅ Verifying build output..."
if [ ! -f "docs/index.html" ]; then
  echo "❌ Error: docs/index.html not found!"
  exit 1
fi

echo "📊 Build statistics:"
echo "   - Total files: $(find docs -type f | wc -l | tr -d ' ')"
echo "   - Total size: $(du -sh docs | cut -f1)"
echo ""
echo "✅ Deployment files ready in docs/ folder!"
echo ""
echo "📋 Next steps:"
echo "   git add docs/"
echo "   git commit -m \"chore: rebuild static site\""
echo "   git push origin master"
echo ""
echo "🌐 Site will be live at: https://sauronx2.github.io/interview-prep/"
