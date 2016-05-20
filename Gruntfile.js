"use strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

    var config = {

        less: {
            development: {
                options: {
                  compress: true
                },

                files: {
                    "css/style.css": "css/style.less"
                }
            }
        },

        // uglify: {
        //   my_target: {
        //     files: {
        //       'dest/output.min.js': ['src/input1.js', 'src/input2.js']
        //     }
        //   }
        // },

        watch: {
          scripts: {
              files: ['css/**/*.less', 'js/**/*.js', 'index.html'],
              tasks: ['build'],
              options: {
                  spawn: false,
                  livereload: true
            },
          },

          configFiles: {
              files: [ 'Gruntfile.js' ],
              options: {
                  reload: true
              }
          }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base: './'
                }
            }
        }
    };

    grunt.initConfig(config);

    grunt.registerTask("build", ["less:development"]);

    grunt.registerTask("default", ["build", "connect", "watch"]);
};