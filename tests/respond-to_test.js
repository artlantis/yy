"use strict";

var grunt = require( "grunt" );

exports.yy_font = {

    setUp: function( done ) {
        done();
    },

    responsive_font: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/respond-to.css" );
        var expected = grunt.file.read( "tests/expected/respond-to.css" );

        test.equal( actual, expected, "respond-to.css should be equal." );

        test.done();
    },

};
