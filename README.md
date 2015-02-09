# yy - a collection of sass utilities

Documentation: https://astina.github.io/yy

master build status: [![Build Status](https://travis-ci.org/astina/yy.svg?branch=master)](https://travis-ci.org/astina/yy)

## Install
`bower install yy`

## Whats in there?

See [Documentation](https://astina.github.io/yy) for details on how to use the stuff. Or have a look at the examples in `examples` directory.

### breakpoint
A system to define your breakpoints and use them in your sass with the mixin `respond-to`.
This system is used throughout yy.

### font
A system to define your fonts and their styles accross different breakpoints.

### sprite
A mixin to help you with resolution dependent spriting. Serve these hidpi sprites to devices with a high pixel density.
This is currently depending on compass, but there will be a mixin with the same interface using other spriting libraries at some time in the future.

### remPxFallback
A mixin that helps you with providing px fallbacks to browsers that [don't understand rem](http://caniuse.com/#search=rem).

### hacks
just a clearfix hack for now.


## Changelog
- 1.3.5 Fixes warning of unquote in responsive-font, simplifies json generation.
- 1.3.4 Stops polluting css output with comments by using inline comments for SassDoc
- 1.3.3 Fix json mixin if breakpoints use multiple conditions
- 1.3.2 Better error messages for responsive-font
- 1.3.1 Bugfix for responsive-font (extending could lead to wrong result if property overwriting is used in mixin call)
- 1.3.0 Allows multiple breakpoints to be passed to `respond-to`, adds a helper to get one property of a fontstyle.
- 1.2.0 Adds visiblity mixins `show-for`, `hide-for` and generator for visibility classes
- 1.1.0 Add functions to register fonts and breakpoints

## Development

You need npm, grunt, sass and compass.

### Tests
Tests are in `tests`. Run them with `grunt test`. If you add a new feature, please add a test for it.

### Documentation
Documentation is generated using [SassDoc](https://github.com/SassDoc/sassdoc). To generate it, run `grunt sassdoc` and see it in the docs folder.
To publish the docs, run `grunt publish-docs`, it will generate and commit them to the `gh-pages` branch and push it to github.

### New Features
Please use feature branches if you are developing new features and send in PR.


