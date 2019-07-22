module.exports = async ({ config, mode }) => {

  config.module.rules.push({
    test: /\.styl$/,
    use: ['style-loader', 'css-loader', {
			loader: 'stylus-loader'
		}],
  });

  // config.module.rules.push({
  //   test: /stories\/*\.js$/,
  //   loaders: [require.resolve('@storybook/addon-storysource/loader')],
  //   enforce: 'pre',
  // });

  return config;
};
