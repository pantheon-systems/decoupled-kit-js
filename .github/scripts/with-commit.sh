git config --global user.email "decoupled-service-user@pantheon.io"
git config --global user.name "pantheon-decoupled-service-user"
git commit -am "[skip ci] $COMMIT_MSG on $(date +"%D at %T %Z")"
git push