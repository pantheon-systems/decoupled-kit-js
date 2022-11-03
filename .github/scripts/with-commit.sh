git config --global user.email "bot@getpantheon.com"
git config --global user.name "Pantheon Automation"
git commit -am "[skip ci] $COMMIT_MESSAGE on $(date +"%D at %T %Z")"
git push