module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "build/css/bootstrap-calendar.css": "src/less/bootstrap-calendar.less"
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
                    'src/js/bootstrap-calendar-templates.js': ['src/templates/*.hbs']
                }
            },
            
        },
        concat: {
            dist: {
                src: ['src/description.txt', 'src/js/bootstrap-calendar-templates.js', 'src/js/bootstrap-calendar.js'],
                dest: 'build/js/bootstrap-calendar.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'build/js/bootstrap-calendar.min.js': ['build/js/bootstrap-calendar.js']
                },
            }
        },
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less'],
            },
            handlebars: {
                files: ['src/templates/*.hbs'],
                tasks: ['handlebars'],
            },
            javascript: {
                files: ['src/js/*.js'],
                tasks: ['concat', 'uglify'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'handlebars', 'watch', 'concat', 'uglify']);
};