"use strict";

var grunt = require( "grunt" );

exports.yy_font = {

    setUp: function( done ) {
        done();
    },

    responsive_font: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/responsive-sprite-compass.css" );
        var expected = grunt.file.read( "tests/expected/responsive-sprite.css" );

        test.equal( actual, expected, "responsive-sprite-compass.css should be equal to responsive-sprite.css." );

        test.done();
    },

};
