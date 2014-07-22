"use strict";

var grunt = require( "grunt" );

exports.yy_remPxFallback = {

    setUp: function( done ) {
        done();
    },

    remPxFallback: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/remPxFallback.css" );
        var expected = grunt.file.read( "tests/expected/remPxFallback.css" );

        test.equal( actual, expected, "remPxFallback.css should be equal." );

        test.done();
    },

};
