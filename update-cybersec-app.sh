#!/usr/bin/env bash
set -euo pipefail

export NODE_OPTIONS=--openssl-legacy-provider

echo "=== Updating CyberSec UCalgary website ==="

APP_DIR="/home/ubuntu/repos/website"
REPO_URL="https://github.com/infosec-ucalgary/website.git"
DEPLOY_DIR="/usr/share/nginx/html/cybersec"

# -----------------------------
# 0) Ensure apt is up to date
# -----------------------------
echo "[+] Updating apt..."
sudo apt-get update -y

# -----------------------------
# 1) Install git
# -----------------------------
if ! command -v git >/dev/null 2>&1; then
  echo "[+] Installing git..."
  sudo apt-get install -y git
fi

# -----------------------------
# 2) Install curl
# -----------------------------
if ! command -v curl >/dev/null 2>&1; then
  echo "[+] Installing curl..."
  sudo apt-get install -y curl
fi

# -----------------------------
# 3) Install Node.js
# -----------------------------
if ! command -v npm >/dev/null 2>&1; then
  echo "[+] Installing Node.js + npm..."
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

# -----------------------------
# 4) Install nginx
# -----------------------------
if ! command -v nginx >/dev/null 2>&1; then
  echo "[+] Installing nginx..."
  sudo apt-get install -y nginx
  sudo systemctl enable nginx
  sudo systemctl start nginx
fi

# -----------------------------
# 5) Clone repo if missing
# -----------------------------
if [ ! -d "$APP_DIR/.git" ]; then
  echo "[+] Repo not found. Cloning..."
  mkdir -p "$(dirname "$APP_DIR")"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

# -----------------------------
# 6) Update repo
# -----------------------------
echo "[+] Pulling latest code..."
git fetch origin
git checkout main
git reset --hard origin/main

# -----------------------------
# 7) Install dependencies
# -----------------------------
echo "[+] Installing node modules..."
rm -rf node_modules
npm cache clean --force
npm ci

# -----------------------------
# 8) Build site
# -----------------------------
echo "[+] Building site..."
npm run build

# -----------------------------
# 9) Deploy to Nginx
# -----------------------------
echo "[+] Deploying to nginx root $DEPLOY_DIR ..."
sudo rm -rf "$DEPLOY_DIR"
sudo mkdir -p "$DEPLOY_DIR"
sudo cp -r dist/* "$DEPLOY_DIR/"

# -----------------------------
# 10) Reload Nginx
# -----------------------------
echo "[+] Reloading nginx..."
sudo systemctl reload nginx

echo "=== Deployment completed successfully ==="
