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

      /* Current project page with legend and slider */
      showProject: function( id ) {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 0 ] ),

            /* If there is no such project we will show default 'no such project' page (~404) */
            currentProjectModel = App.collections.projectsCollection.get( id ) || new ProjectModel({});

        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        /**
         * TODO: add templates caching.
         */
        App.views.projects[ id ] = new ProjectView( { model: currentProjectModel } );
        
        App.views.projects[ id ].render();
      },

      /* Page with contacts */
      showContacts: function() {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 2 ] );

        App.views.contactsView.render();
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );
      },

      /* About page */
      showAbout: function() {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 1 ] );
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        App.views.aboutView.render();
      },

      /* Main page with projects list */
      defaultRoute: function( actions ) {
        var $currentMenuItem = $( App.views.mainNavigation.$menuItems[ 0 ] );
        App.views.mainNavigation.selectRoutedMenuItem( $currentMenuItem );

        App.views.thumbCollectionView.render();
      }
    });

  /**
   * @public
   */
  var initialize = function() {
      /* New router */
      var maryRouter = new MaryRouter;
      Backbone.history.start();
    };

  /* Public, router initialisation */
    return {
      initialize: initialize
    };

});