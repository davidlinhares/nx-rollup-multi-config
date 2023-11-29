const nrwlConfig = require('@nx/react/plugins/bundle-rollup');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const md5 = require('md5');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  console.log('NX CONFIG', nxConfig);
  const configWithoutPostCSS = nxConfig.plugins.filter((names) => names.name !== 'postcss');
  return {
      ...nxConfig,
      plugins: [
        postcss({
          inject: true,
          extract: true,
          modules: {
            generateScopedName: (name, filename, css) => name + '_' + md5(css),
          },
          plugins: [autoprefixer],
        }),
        ...configWithoutPostCSS,
      ],
    };
};
