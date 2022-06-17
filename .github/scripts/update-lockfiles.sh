# This script will update the package-lock.json files in the starter kits before publishing
pnpm ci:version

for dir in ./starters/*
  do
    cd $dir
    npm i --package-lock-only
    cd ../../
  done
