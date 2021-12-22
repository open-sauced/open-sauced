module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    },
    'postcss-normalize': {},
  },
};
