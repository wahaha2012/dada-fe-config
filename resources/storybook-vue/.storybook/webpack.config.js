const path = require("path");
const resolve = dir => path.join(__dirname, '..', dir);

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules = storybookBaseConfig.module.rules.concat([
    {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"],
      include: resolve(".")
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: resolve(".")
    },
    {
      test: /\.svg$/,
      loader: 'svg-sprite-loader',
      include: [resolve('src/icons')],
      options: {
        symbolId: 'icon-[name]'
      }
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      exclude: [resolve('src/icons')],
      options: {
        limit: 10000
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    },
    {
      resourceQuery: /blockType=docs/,
      use: [
        'storybook-readme/env/vue/docs-loader',
        'html-loader',
        'markdown-loader',
      ],
    }
  ]);

  Object.assign(storybookBaseConfig.resolve.alias, {
    "@": resolve("src"),
    "stories": resolve("stories")
  });

  return storybookBaseConfig;
};