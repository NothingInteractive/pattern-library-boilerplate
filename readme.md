# Nothing :rocket: Pattern Library Boilerplate

A boilerplate for building pattern libraries on top of Patternlab. It uses [Patternlab Edition Node - Webpack](https://github.com/Comcast/patternlab-edition-node-webpack) as foundation and is preconfigured for Nothing's internal tools and frameworks.

## Quickstart Guide

1.  Download the `.zip` or fork this repository, then clone it locally.
    > `git clone git@github.com:YOURGROUP/patternlab-edition-node-webpack.git`
2.  In a terminal window, navigate to the downloaded directory
    > `cd path/to/patternlab-edition-node-webpack`
3.  To populate Patternlab with sample data, install a starter kit, there are many [starterkits](https://github.com/pattern-lab?utf8=%E2%9C%93&q=starterkit&type=&language=) choose from
    > `npm install starterkit-mustache-demo`
4.  Generate sample files
    > `npm run patternlab:loadstarterkit --kit=starterkit-mustache-demo`
5.  Install node dependencies.
    > `npm install`
6.  Show Patternlab in a Webbrowser
    > `npm run serve`

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

#### Setting Dev Server Settings

You can set the url and port number in the configuration for

    "server": {
        "url": "http://localhost",
        "port": 3000,
        "watchContentBase": true,
        "watchOptions": {
            "aggregateTimeout": 500,
            "ignored": [],
            "info-verbosity": "verbose"
        }
    },

````
#### Modifying the compression settings for bundles

#### Setting the Webpack Merge Options
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
````

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
