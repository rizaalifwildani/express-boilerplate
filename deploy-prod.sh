#!/bin/sh

cd /path/to/project/folder/production
git fetch
git checkout master
git pull
yarn install
pm2 restart projectname