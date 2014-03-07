/**
 * Require js global configuration
 */
requirejs.config({
    baseUrl: 'js/',

    paths: {
        jquery: 'libs/jquery.2.1.0.min',
        underscore: 'underscore1.6.0.min',
        backbone: 'backbone.min'
    }
});


require(
    ['jquery'],
    function( $ ){
        console.log( 'It works!' );
    }
);