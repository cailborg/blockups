module.exports = {
  stories: ["../src/**/*.stories.*"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          [
            "react-app",
            "@babel/preset-react",
            { flow: false, typescript: true },
          ],
        ],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx", ".mdx");

    return config;
  },
};
