"use strict";

var grunt = require( "grunt" );

exports.yy_font = {

    setUp: function( done ) {
        done();
    },

    responsive_font: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/json.css" );
        var expected = grunt.file.read( "tests/expected/json.css" );

        test.equal( actual, expected, "json.css should be equal." );

        test.done();
    },

};
