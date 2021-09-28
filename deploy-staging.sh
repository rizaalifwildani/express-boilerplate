#!/bin/sh

cd /path/to/project/folder/staging
git fetch
git checkout staging
git pull
yarn install
pm2 restart projectname