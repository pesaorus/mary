/**
 * Require js global configuration
 */
requirejs.config({
    baseUrl: 'js/',

    paths: {
        jquery: 'libs/jquery.2.1.0.min',
        underscore: 'libs/underscore1.6.0.min',
        backbone: 'libs/backbone.min',
        /* Application router */
        router: './router'
    }
});



/**
 * Main App module
 * 
 */
require(
    [
        'jquery',
        'views/about/aboutview',
        'router'
    ],
    function( $, AboutView, router ) {

        console.log( 'Application work\'s' );

        window.aboutView = new AboutView;
        
        router.initialize();

    }
);