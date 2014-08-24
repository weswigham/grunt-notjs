/*
 * grunt-notjs
 * 
 *
 * Copyright (c) 2014 Wesley Wigham
 * Licensed under the MIT license.
 */

'use strict';

var notjs = require('not.js');
var path = require('path');
var Promise = require('promise');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('notjs', 'Compile static not.js files to html', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      scope: {},
      explicit: false,
      seperator: '\n' //for concatenating results, if that's a thing you do
    });
    
    var done = this.async();

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var proms = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        
        grunt.log.writeln('Rendering input file "' + filepath + '"');
        return new Promise(function(resolve, reject) {
          notjs.renderPath(path.resolve(filepath), options, function(err, data) {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      });
      
      Promise.all(proms).then(function(processed) {
        var result = processed.join(options.seperator);

        // Write the destination file.
        grunt.file.write(file.dest, result);

        // Print a success message.
        grunt.log.writeln('File "' + file.dest + '" created.');
        
        done();
      }, function(errs) {
        grunt.fail.fatal(errs.stack);
      });
    });
  });

};
