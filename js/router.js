/** 
 * Main Mary App router module
 */

define(
  /* Router dependencies */
  [
    'underscore',
    'jquery',
    'backbone',
    'views/about/aboutview'
  ],

  function( _, $, Backbone, AboutView ) {

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

        /* Default route */
        '*actions': 'defaultRoute'
      },

      showProject: function( id ) {
        console.log( 'Client calls to show ', id );
      },

      showContacts: function() {
        App.views.contactsView.render();
        console.log( 'Contacts' );
      },

      showAbout: function() {
        App.views.aboutView.render();
        console.log( 'About' );
      },

      defaultRoute: function( actions ) {
        App.views.projectsListView.render();
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