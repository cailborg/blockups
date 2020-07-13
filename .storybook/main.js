module.exports = {
  stories: ["../src/**/*.stories.*"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: ["@storybook/addon-docs"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
