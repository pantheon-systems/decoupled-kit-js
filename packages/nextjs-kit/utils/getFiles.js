// TODO: make this a .ts file.
// Rollup was not working when this was a .ts file, but it would be nice to have types here.
import fs from 'fs';

export const getFiles = folder => {
  const files = fs.readdirSync(folder);

  const filesToBuild = files
    .map(file => `${folder}/${file}`)
    .filter(file => !file.endsWith('index.ts'));

  return filesToBuild;
};
