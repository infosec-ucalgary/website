#!/bin/bash

NODE_OPTIONS=--openssl-legacy-provider
echo Updating CyberSec UCalgary website...

# Pull changes into app directory
cd /home/ubuntu/repos/website
git fetch --all
git reset --hard origin/main
git pull

# Make sure NPM is updated and stuff
rm -rf node_modules
npm cache clean --force
npm ci

# Build app
npm run build

# Delete app dist folder from /usr/share/nginx/html/dist
rm -rf /usr/share/nginx/html/dist

# Copy freshly built app into the just deleted directory
cp -r dist /usr/share/nginx/html/cybersec

echo Done.
