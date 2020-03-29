#!/bin/bash
# Create a package for distribution/public

# Run grunt build task to get latest version of assets
grunt build

# Delete existing public dir
rm -rf public

# Create directories
mkdir public
mkdir public/css
mkdir public/js
mkdir public/fonts

# Copy files
cp .htaccess_dev public/.htaccess
cp 404.html public/404.html
cp browserconfig.xml public/browserconfig.xml
cp humans.txt public/humans.txt
cp index.html public/index.html
cp robots.txt public/robots.txt
cp site.webmanifest public/site.webmanifest

# Copy & Replace CSS
cp css/dist/styles.min.css public/css/styles.min.css
sed -i '.dev' -e 's~css/dist~css~g' public/*.html

# Copy JS
cp -R js/dist/. ./public/js
cp -R js/libs/. ./public/js

# Replace JS URLs
sed -i '.dev' -e 's~js/dist~js~g' public/*.html
sed -i '.dev' -e 's~js/libs~js~g' public/*.html

# Copy favicons
cp -R favicons/. ./public/

# Replace favicons urls
sed -i '.dev' -e 's~favicons/~~g' public/*.html

# Copy fonts
cp -R fonts/. ./public/fonts/