/*
 * grunt-notjs
 * 
 *
 * Copyright (c) 2014 Wesley Wigham
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
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

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'notjs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
