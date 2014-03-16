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
        'router'
    ],
    function( $, aboutView, contactsView, mainNavigation, ThumbCollectionView, router ) {

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
         * Method to get model by id.
         * @param  {Number} id - model id.
         * @return {Onject} - model.
         */
        App.models.getModel = function( id ) {
            var idToReturn = id,
                modelToReturn =  _.find( App.models.modelsCollection, function( model ) {
                    return model.id === idToReturn;
                });

            return modelToReturn;
        }

        /**
         * All data (models) to draw main page
         * is stored in 'js/gallerydata.json' file.
         * We will place it in App.models object.
         */
        $.get('js/gallerydata.json', function(resp) {

            App.models.modelsCollection = resp.data;

        }).then(function() {

            /**
             * Static views.
             */
            App.views.aboutView = aboutView;
            App.views.contactsView = contactsView;
            App.views.mainNavigation = mainNavigation;

            /**
             * Creating thumbnailc collection.
             */
            App.views.thumbCollectionView = new ThumbCollectionView;

            /**
             * Router initialization.
             */
            router.initialize();
        });
    }
);