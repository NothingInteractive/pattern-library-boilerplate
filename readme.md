# Nothing :rocket: Pattern Library Boilerplate
A boilerplate for building pattern libraries on top of Patternlab. It uses [Patternlab Edition Node - Webpack](https://github.com/Comcast/patternlab-edition-node-webpack) as foundation and is preconfigured for Nothing's internal tools and frameworks.

## Installation and Starting

1. Download/clone
2. `npm install`
3. `npm run patternlab:serve`

See [upstream repository](https://github.com/Comcast/patternlab-edition-node-webpack) for further information.


## Getting Started

### List all of the available commands

To list all available commands type:

    npm run patternlab:help

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    npm run patternlab:build

### Watch for changes and re-generate Pattern Lab

To watch for changes, re-generate the front-end, and server it via a BrowserSync server,  type:

    npm run patternlab:serve

Webpack dev server should open [http://localhost:3000](http://localhost:3000) in your browser, both host and port are configurable in the `patternlab-config.json` file.

### Pattern Lab - Configuration

Unlike the other editions, there were a few options added just for this edition that allow for easier upgrading, and better flexibility.

#### Setting Dev Server Settings
You can set the url and port number in the configuration for 

    "server": {
        "url": "http://localhost",
        "port": 3000
    },

#### Setting the Webpack Merge Options
It's important to make the configuration for webpack something very easy to update, and very easy to modify. The current setting for webpack merge are described [here.](https://github.com/Comcast/patternlab-edition-node-webpack/blob/master/source/_app/readme.md)

You can change how it merges by changing this object in `patternlab-config.json`:
    
    "webpackMerge": {
        "entry":"replace"
    },

By default merge does a `append` if that option works for you only set which webpack configuration you want to change. The merge setting is: `smartStrategy` which is documented over on this [page.](https://www.npmjs.com/package/webpack-merge#mergesmartstrategy-key-prependappendreplaceconfiguration--configuration)

### Licenses
* [babel-core](https://github.com/babel/babel/blob/master/LICENSE) - MIT
* [babel-loader](https://github.com/babel/babel-loader/blob/master/LICENSE) -MIT,
* [babel-preset-es2015](https://github.com/babel/babel/blob/master/LICENSE) - MIT
* [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin/blob/master/LICENSE) - MIT
* [event-hooks-webpack-plugin](https://github.com/cascornelissen/event-hooks-webpack-plugin/blob/master/LICENSE.md) - MIT
* [globby](https://github.com/sindresorhus/globby/blob/master/license) - MIT
* [patternlab-node](https://github.com/pattern-lab/patternlab-node/blob/master/LICENSE) - MIT
* [styleguidekit-assets-default](https://github.com/pattern-lab/styleguidekit-assets-default/blob/master/LICENSE) - MIT
* [styleguidekit-mustache-default](https://github.com/pattern-lab/styleguidekit-mustache-default/blob/master/LICENSE) - MIT
* [webpack](https://github.com/webpack/webpack/blob/master/LICENSE) - MIT
* [webpack-config-utils](https://github.com/kentcdodds/webpack-config-utils/blob/master/LICENSE) - MIT
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server/blob/master/LICENSE) - MIT
* [webpack-merge](https://github.com/survivejs/webpack-merge/blob/master/LICENSE) - MIT
