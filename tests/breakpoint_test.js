"use strict";

var grunt = require( "grunt" );

exports.yy_breakpoint = {

    setUp: function( done ) {
        done();
    },

    respond_to: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/respond-to.css" );
        var expected = grunt.file.read( "tests/expected/respond-to.css" );

        test.equal( actual, expected, "respond-to.css should be equal." );

        test.done();
    },

    json: function( test ) {
        test.expect( 1 );

        var actual = grunt.file.read( "tmp/json.css" );
        var expected = grunt.file.read( "tests/expected/json.css" );

        test.equal( actual, expected, "json.css should be equal." );

        test.done();
    },

};
