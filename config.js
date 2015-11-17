module.exports = {
    globs: {
        sass: {
            src: [
                // Load utility mixins
                '../private/sass/mixins.scss',
                // Load normalizer
                '../private/sass/normalize.scss',
                // Colours by name
                '../private/sass/colors.scss',
                // Base style
                '../private/sass/variables.scss',
                '../private/sass/base.scss',
                // Load sass files in the various client components
                '../client/**/*.scss'
            ]
        },
        scssLint: {
            src: [
                '../private/sass/**/*.scss',
                '../client/**/*.scss'
            ]
        },
        tmpDir: '.tmp/',
        tmpFile: 'all-sass.scss',
        destDir: '../client/css/'
    }
};
