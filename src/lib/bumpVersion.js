const packageJson = require('../../package.json');

// bump the version in the package.json
function bumpVersion(version, options = {}) {
  let [major, minor, patch] = version.split('.');

  // leverage a case statment to bump the version base option.type
  switch (options.type) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor': 
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
    default:
      throw new Error(`Unknown version type: ${options.type}`);
  }

  const newVersion = [major, minor, patch].join('.');
  packageJson.version = newVersion;
  return newVersion;
}

// test major bumpVersion
// console.log(bumpVersion(packageJson.version, { type: 'major' }));

// test minor bumpVersion
console.log(bumpVersion(packageJson.version, { type: 'minor' }));

// test patch bumpVersion
// console.log(bumpVersion(packageJson.version, { type: 'patch' }));