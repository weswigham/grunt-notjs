# grunt-notjs ![status](https://travis-ci.org/weswigham/grunt-notjs.svg)

> Compile static not.js files to html

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-notjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-notjs');
```

## The "notjs" task

### Overview
In your project's Gruntfile, add a section named `notjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  notjs: {
    implicit_scope: {
      options: {
        scope: {
          title: 'Yes', 
          items: ['Foo', 'Bar']
        }
      },
      files: {
        'tmp/implicit_scope.html': 'test/fixtures/implicit_scope.not.js'
      }
    },
    explicit_scope: {
      options: {
        scope: {
          title: 'Yes', 
          items: ['Foo', 'Bar']
        },
        explicit: true
      },
      files: {
        'tmp/explicit_scope.html': 'test/fixtures/explicit_scope.not.js'
      }
    }
  },
})
```

### Options

#### options.scope
Type: `Object`
Default value: `{}`

An object passed to `not.js` to use as the scope object for each file.

#### options.explicit
Type: `Boolean`
Default value: `false`

A boolean value indicating if the files in question require `not.js` themselves already and use explicit contexts.

#### options.separator
Type: `String`
Default value: `\n`

If multiple `src` files map to one `dest`, the string to join them all with.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Wesley Wigham. Licensed under the MIT license.
