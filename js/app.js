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
        'views/contacts/contactsview',
        'views/projects/projectslistview',
        'views/mainnavigation',
        'router'
    ],
    function( $, aboutView, contactsView, projectsListView, mainNavigation, router ) {

        /**
         * New Application namespace
         */
        window.App = {
            models: {},
            views: {},
            collections: {}
        };

        App.views.projectsListView = projectsListView;
        App.views.aboutView = aboutView;
        App.views.contactsView = contactsView;

        App.views.mainNavigation = mainNavigation;

        console.log( 'Application work\'s' );

        router.initialize();

    }
);