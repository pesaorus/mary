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
         * All data (models) to draw main page
         * is stored in 'js/gallerydata.json' file.
         * We will place it in App.models object.
         */
        $.get('js/gallerydata.json', function(resp) {

            App.collections.modelsList = resp.data;

        }).then(function() {

            /**
             * Static views.
             */
            App.views.aboutView = aboutView;
            App.views.contactsView = contactsView;
            App.views.mainNavigation = mainNavigation;

            /**
             * Creating projects collection.
             * In future wi will get separate project from thumbs list.
             */
            App.collections.projectsCollection = new ProjectsCollection( App.collections.modelsList );

            /**
             * Creating thumbnails collection view.
             */
            App.views.thumbCollectionView = new ThumbCollectionView;

            /**
             * Router initialization.
             */
            router.initialize();
        });
    }
);