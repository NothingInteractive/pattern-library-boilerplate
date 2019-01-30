# Nothing :rocket: Pattern Library Boilerplate

A boilerplate for building pattern libraries on top of Patternlab. It uses [Patternlab Edition Node - Webpack](https://github.com/Comcast/patternlab-edition-node-webpack) as foundation and is preconfigured for Nothing's internal tools and frameworks.

## Installation and Starting

1.  Download/clone
2.  `npm install`
3.  `npm run patternlab:serve`

See [upstream repository](https://github.com/Comcast/patternlab-edition-node-webpack) for further information.

## Getting Started

### List all of the available commands

To list all available commands type:

    npm run patternlab:help

### Generate Pattern Lab

Generate documentation front-end:

```sh
    npm run build
```

Generate production bundles:

```sh
    npm run package
```

Will store CSS, JavaScript, images and other assets minimized and production ready in the
`dist` folder. Output location can be placed. See configuration manual.

### Watch for changes and re-generate Pattern Lab

To watch for changes, re-generate the front-end, and server it via a BrowserSync server, type:

    npm run serve

Webpack dev server should open [http://localhost:3000](http://localhost:3000) in your browser, both host and port are configurable in the `patternlab-config.json` file.

### Pattern Lab - Configuration

Unlike the other editions, there were a few options added just for this edition that allow for easier upgrading, and better flexibility.

#### Custom Webpack Configuration and Merge Options

In this edition, it's important to make the configuration for webpack something very easy to update, and very easy to modify. The current setting for webpack custom configuration and merge are described [here.](https://github.com/Comcast/patternlab-edition-node-webpack/blob/master/source/_app/readme.md)

You can change how it merges by changing this object in `patternlab-config.json`:

```javascript
    "webpackMerge": {
        "entry": "replace"
    },
```

By default merge does a `append` if that option works for you only set which webpack configuration you want to change. The merge setting is: `smartStrategy` which is documented over on this [page.](https://www.npmjs.com/package/webpack-merge#mergesmartstrategy-key-prependappendreplaceconfiguration--configuration)

#### Setting Webpack Dev Server

You can set several options to configure your dev server. You can also in the CLI pass any option on demand.

```javascript
    "webpackDevServer": {
        "url": "http://localhost",
        "port": 3000,
        "watchContentBase": true,
        "watchOptions": {
            "aggregateTimeout": 500,
            "ignored": [],
            "info-verbosity": "verbose"
        }
    },
```

#### Modifying the compression settings for bundles

You can safely modify the following settings in the the main `webpack.babel.config` that can change how the bundles get optimized.

_Note: in webpack 4, these settings are automatically triggered when `mode=production` when running the dev server this is not used._

All uglify settings are in the `patternlab-config.json`:

```javascript
    "uglify": {
        "sourceMap": false,
        "parallel": true,
        "uglifyOptions": {
            "mangle": false
        }
    },
```

#### Namespace

In some cases you may want to add a namespace to your JS or CSS/SCSS files. You can now add a global `NAMESPACE` which can be read by any JS module. The sample of .scss includes how to use it in a `.SCSS` file.

This can be changed in the`patternlab-config.json` under `app`:

```javascript
    "app": {
        "namespace": ""
    }
```

### Licenses

- [babel-cli](https://github.com/babel/babel/blob/master/LICENSE) - MIT
- [babel-core](https://github.com/babel/babel/blob/master/LICENSE) - MIT
- [babel-polyfill](https://github.com/babel/babel-loader/blob/master/LICENSE) -MIT
- [babel-loader](https://github.com/babel/babel-loader/blob/master/LICENSE) -MIT
- [babel-preset-env](https://github.com/babel/babel/blob/master/LICENSE) - MIT
- [babel-register](https://github.com/babel/babel-loader/blob/master/LICENSE) -MIT
- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin/blob/master/LICENSE) - MIT
- [event-hooks-webpack-plugin](https://github.com/cascornelissen/event-hooks-webpack-plugin/blob/master/LICENSE.md) - MIT
- [globby](https://github.com/sindresorhus/globby/blob/master/license) - MIT
- [patternlab-node](https://github.com/pattern-lab/patternlab-node/blob/master/LICENSE) - MIT
- [styleguidekit-assets-default](https://github.com/pattern-lab/styleguidekit-assets-default/blob/master/LICENSE) - MIT
- [styleguidekit-mustache-default](https://github.com/pattern-lab/styleguidekit-mustache-default/blob/master/LICENSE) - MIT
- [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin/blob/master/LICENSE) - MIT
- [webpack](https://github.com/webpack/webpack/blob/master/LICENSE) - MIT
- [webpack-config-utils](https://github.com/kentcdodds/webpack-config-utils/blob/master/LICENSE) - MIT
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server/blob/master/LICENSE) - MIT
- [webpack-merge](https://github.com/survivejs/webpack-merge/blob/master/LICENSE) - MIT

### Contributors

|                                                                              |                    |                                       |
| ---------------------------------------------------------------------------- | :----------------- | :------------------------------------ |
| ![@Josh68](https://avatars2.githubusercontent.com/u/771447?s=75&v=4)         | **Josh Schneider** | [GitHub](https://github.com/Josh68)   |
| ![@paintedbicycle](https://avatars3.githubusercontent.com/u/371114?s=75&v=4) | **Paul Wright**    | [Website](https://paintedbicycle.com) |

```

```
