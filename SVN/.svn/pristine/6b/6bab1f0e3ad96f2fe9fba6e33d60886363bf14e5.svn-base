#!/bin/bash
# Sync source code from git working directory to SVN working copy

# Path to your SVN trunk (edit if needed)
SVN_DST="./SVN/trunk"

# Remove old files in SVN trunk except .svn
find "$SVN_DST" -mindepth 1 -not -name '.svn' -exec rm -rf {} +

# Copy all files from project root to SVN trunk, excluding .git, .svn, node_modules, etc.
rsync -av --exclude='.git' --exclude='.svn' --exclude='node_modules' --exclude='SVN' --exclude='wp-assets' ./ "$SVN_DST"

# Go to SVN working copy
cd "$SVN_DST"

# Add new files and remove missing files in SVN
svn add --force . --auto-props --parents --depth infinity -q
svn status | grep '^!' | awk '{print $2}' | xargs svn rm --force

echo "Sync completed. Review changes with: svn status"
