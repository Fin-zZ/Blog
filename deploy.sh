#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xdmatirx/xdmatirx.github.io.git master

git push -f https://gitee.com/zzPjj/mydiary.git master:gh-pages

# git push origin master


cd -
