module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'stylus-loader'
    ]
  });

  config.module.rules.push({
    test: /\.story\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'javascript' },
      },
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
    loader: 'url-loader'
  });

  return config;
};
