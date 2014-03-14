/** 
 * Main Mary App router module
 */
define(
  /* Router dependencies */
  [
    'underscore',
    'jquery',
    'backbone',
    'views/projects/projectview',
    'models/projectModel'
  ],

  function( _, $, Backbone, ProjectView, ProjectModel ) {

  /** 
   * Backbone router @constructor 
   */
  var MaryRouter = Backbone.Router.extend({
      routes: {
        /* Route to show current project */
        'project/:id(/)': 'showProject',

        /* Contacts route */
        'contact(/)': 'showContacts',

        /* About route */
        'about(/)': 'showAbout',

        /* Default route, shows main page */
        '*actions': 'defaultRoute'
      },

      showProject: function( id ) {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 0 ] );
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        if (!App.views.projects[ id ]) {
          console.log( App.models[ id - 1 ] );
          App.views.projects[ id ] = new ProjectView( { model: new ProjectModel(App.models[ id - 1 ]) } );
        }

        App.views.projects[ id ].render();

        console.log( 'Client calls to show ', id );
      },

      showContacts: function() {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 2 ] );

        App.views.contactsView.render();
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        console.log( 'Contacts' );
      },

      showAbout: function() {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 1 ] );
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        App.views.aboutView.render();
        console.log( 'About' );
      },

      defaultRoute: function( actions ) {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 0 ] );
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        App.views.thumbCollectionView.render();
        console.log( 'Default route' );
      }
    });

  /**
   * @public
   */
  var initialize = function() {
      /* New router */
      var maryRouter = new MaryRouter;
      
      console.log( 'Router is created.' );

      Backbone.history.start();

    };

  /* Public, router initialisation */
    return {
      initialize: initialize
    };

});