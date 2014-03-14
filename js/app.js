/**
 * Require js global configuration
 */
requirejs.config({
    baseUrl: 'js/',

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
            models: [],
            views: {
                projects: {}
            },
            collections: {},
            elements: {}
        };

        App.elements.$contentContainer = $('#content');
        App.models = [
            {
                id: 1,
                imagePreview: 'images/projects/Sber_prew.png',
                title: 'First image',
                textShort: 'First project with 25 images inside'
            },
            {
                id: 2,
                imagePreview: 'images/projects/Sber_prew.png',
                title: 'Second image',
                textShort: 'Second project with 25 images inside'
            },
            {
                id: 3,
                imagePreview: 'images/projects/Sber_prew.png',
                title: 'Third image',
                textShort: 'Third project with 25 images inside'
            },
        ];

        //App.views.projectsListView = projectsListView;
        App.views.aboutView = aboutView;
        App.views.contactsView = contactsView;
        App.views.thumbCollectionView = new ThumbCollectionView;

        App.views.mainNavigation = mainNavigation;

        console.log( 'Application work\'s' );

        router.initialize();

    }
);