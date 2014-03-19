/**
 * Require js global configuration
 */
requirejs.config({
    baseUrl: 'js/',
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: 'libs/jquery.2.1.0.min',
        underscore: 'libs/underscore1.6.0.min',
        backbone: 'libs/backbone.min',
        handlebars: 'libs/handlebars',
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
        'views/mainnavigation',
        'views/projects/thumbscollectionview',
        'collections/projectscollection',
        'router'
    ],
    function( $, aboutView, contactsView, mainNavigation, ThumbCollectionView, ProjectsCollection, router ) {

        /**
         * New Application namespace
         */
        window.App = {
            models: {},
            views: {
                projects: {}
            },
            collections: {},
            elements: {}
        };

        /**
         * Main content container.
         * All pages will be placed inside it.
         */
        App.elements.$contentContainer = $('#content');

        /**
         * Static views.
         */
        App.views.aboutView = aboutView;
        App.views.contactsView = contactsView;
        App.views.mainNavigation = mainNavigation;

        /**
         * Creating projects collection.
         * In future wi will get separate project from projectsCollection list.
         */
        App.collections.projectsCollection = new ProjectsCollection();

        /**
         * Fetching projects list from 'js/gallerydata.json' and then we can
         * create thumbs collection and initialize router.
         */
        App.collections.projectsCollection.fetch({
            success: function() {
                /**
                 * Creating thumbnails collection view.
                 */
                App.views.thumbCollectionView = new ThumbCollectionView;

                /**
                 * Router initialization.
                 */
                router.initialize();
            },

            error: function() {
                console.error('Fetching error occured.');
            }
        });

            

    }
);