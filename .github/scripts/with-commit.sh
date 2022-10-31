git config --local user.name "GitHub Action"
git config --local user.email "action@github.com"
git commit -am "[skip ci] $COMMIT_MESSAGE on $(date +"%D at %T %Z")"
git push