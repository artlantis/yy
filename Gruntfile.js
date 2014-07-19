    module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        sassdoc: {
            default: {
                src: 'sass',
                dest: 'docs',
                options: {
                    display: {
                        access: ['public']
                    },
                    package: './package.json',
                    verbose: true
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
        }
    });
    
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', ['sassdoc']);
    grunt.registerTask('publish-docs', ['sassdoc', 'gh-pages']);
};
