module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },

    'removeRasterImages',

    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
};
