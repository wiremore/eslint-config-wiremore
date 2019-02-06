const { peerDependencies } = require('./package.json');

const install = Object.entries(peerDependencies).map(([pkg, version]) => {
    return [pkg, version].join('@');
});

// console.log(install.join(' '));

console.log(`
Package 'eslint-config-wiremore' was installed successfully. Please make sure to also install its peerDependencies:
(
  export PKG=eslint-config-wiremore;
  yarn info "$PKG@latest" peerDependencies --json | command sed 's/[{},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
)
`);
