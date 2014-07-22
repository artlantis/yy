    module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        sassdoc: {
            default: {
                src: 'sass',
                dest: 'docs',
                options: {
                    display: {
                        access: ['public', 'private'],
                        watermark: true,
                    },
                    package: './package.json',
                    verbose: true,

                }
            }
        },
        'gh-pages': {
            options: {
                // Options for all targets go here.
            },
            'gh-pages': {
                options: {
                    base: 'docs',
                    message: 'update docs'
                },
                // These files will get pushed to the `gh-pages` branch (the default).
                src: ['**']
            },
        },

        //the tests
        sass: {
            responsive_font: {
                options: {
                    bundleExec: true,
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'tests/sass',
                    src: 'responsive-font.scss',
                    dest: 'tmp',
                    ext: '.css'
                }]
            },
            respond_to: {
                options: {
                    bundleExec: true,
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'tests/sass',
                    src: 'respond-to.scss',
                    dest: 'tmp',
                    ext: '.css'
                }]
            },
            json: {
                options: {
                    bundleExec: true,
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'tests/sass',
                    src: 'json.scss',
                    dest: 'tmp',
                    ext: '.css'
                }]
            },
        },

        comments: {
            test_css: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: [ 'tmp/*.css'] // files to remove comments from
            },
        },

        nodeunit: {
            tests: [ "tests/*_test.js" ],
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('test', ['sass', 'comments', 'nodeunit']);
    grunt.registerTask('publish-docs', ['sassdoc', 'gh-pages']);

    grunt.registerTask('default', ['test']);
};
