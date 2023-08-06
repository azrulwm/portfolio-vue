#!/usr/bin/env sh
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd dist
# make a copy of index into 404 to fix the issue with reloading on github
cp index.html 404.html
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:azrulwm/portfolio-vue.git master:gh-pages
cd -