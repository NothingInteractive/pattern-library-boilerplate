const {getIfUtils, removeEmpty} = require('webpack-config-utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const cssnext = require('postcss-cssnext');
const atImport = require('postcss-import');
const url = require('postcss-url');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globby = require('globby');
const plConfig = require('../../patternlab-config.json');
const {resolve} = require('path');

module.exports = env => {
  // Extend the default with the "build" value to be able making conditions for the path resolving in the wagtail static folder
  const {ifProduction, ifDevelopment, ifPackage} = getIfUtils(env, [
    'production',
    'prod',
    'test',
    'development',
    'dev',
    'package'
  ]);

  // Configure assets bundles
  const entries = () => {
    const result = Object.assign(
      {},
      // JavaScript, TypeScript
      toWebpackEntry(path.resolve(__dirname, '../../', plConfig.paths.source.js), '**/*.ts', 'js'),
      // CSS
      toWebpackEntry(path.resolve(__dirname, '../../', plConfig.paths.source.css), '**/*.css', 'css')
    );

    return result;
  };

  const app = {
    entry: entries(),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              // Make CSS @imports recognizable by Webpack, ensure they are included once
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  minimize: true
                }
              },
              // Add some CSS manipulations
              {
                loader: 'postcss-loader',
                options: {
                  plugins: loader => [
                    // Inline all CSS @import statements
                    atImport({root: loader.resourcePath}),
                    // Rebase all url referenes in the CSS
                    url({url: 'rebase'}),
                    // Backward transpilation of new CSS features
                    cssnext()
                  ]
                }
              }
            ]
          })
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        },
        // All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json'
          }
        }
      ]
    },
    // We overwrite the output of the core webpack config here to get rid of the file extension
    // if environment is "package", move to package folder specified in pattern lab config
    output: {
      path: ifPackage(
        resolve(__dirname, '../../', plConfig.paths.package.root),
        resolve(__dirname, '../../', plConfig.paths.public.root)
      ),
      filename: '[name]'
    },
    plugins: removeEmpty([
      new ExtractTextPlugin('[name]'),
      ifPackage(
        new CopyWebpackPlugin([
          {
            // Copy all images from source to package
            context: resolve(plConfig.paths.source.images),
            from: './**/*.*',
            to: resolve(plConfig.paths.package.images)
          },
          {
            // Copy all web fonts from source to package
            context: resolve(plConfig.paths.source.fonts),
            from: './*',
            to: resolve(plConfig.paths.package.fonts)
          }
        ])
      )
    ]),
    resolve: {
      extensions: ['.js', '.tsx', '.ts', '.css']
    }
  };

  return app;
};

/**
 * Creates a Webpack `entry` property e.g. `dest/filename`: `path/filename`
 * @param {string} src Input path
 * @param {string} files Input file name or glob
 * @param {string} dest Output path
 */
function toWebpackEntry(src, files, dest = '') {
  const entries = {};
  const resultSet = globby.sync([resolve(`${src}/${files}`)]).forEach(function(filePath) {
    let filename = path.basename(filePath);
    const extName = path.extname(filePath);

    if (extName === '.ts') {
      filename = path.basename(filePath, '.ts') + '.js';
    }

    const outputPath = `${dest}/${filename}`;
    entries[`${dest}/${filename}`] = filePath;
  });

  return entries;
}
