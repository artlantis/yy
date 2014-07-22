"use strict";

var grunt = require( "grunt" );

exports.yy_hacks = {

    setUp: function( done ) {
        done();
    },

    clearfix: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/clearfix.css" );
        var expected = grunt.file.read( "tests/expected/clearfix.css" );

        test.equal( actual, expected, "clearfix.css should be equal." );

        test.done();
    },

};
