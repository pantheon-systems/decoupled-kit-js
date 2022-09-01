# exit prerelease mode
pnpm changeset pre exit
# version packages
pnpm ci:version
# enter prerelease mode until the next main release
pnpm changeset pre enter canary