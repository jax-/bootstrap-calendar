﻿module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/bs-calendar.css": "less/bs-calendar.less"
                }
            }
        },
        handlebars: {
            options: {
                namespace: 'CalendarTemplates',
                processName: function(filePath) {
                    return filePath.replace(/^templates\//, '').replace(/\.hbs$/, '');
                }
            },
            compile: {
                files: {
                    'js/hb-tmp-compiled.js': ['templates/*.hbs']
                }
            },
            
        },
        watch: {
            buildless: {
                files: ['less/*.less'],
                tasks: ['less'],
            },
            compiletemplates: {
                files: ['templates/*.hbs'],
                tasks: ['handlebars'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // A very basic default task.
    grunt.registerTask('default', ['less', 'handlebars', 'watch']);
};