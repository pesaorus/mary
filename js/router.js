/** 
 * Main Mary App router module
 */

define(
	/* Router dependencies */
	[
		'underscore',
		'backbone'
	], 

	function( _, Backbone ) {

	/** 
	 * Backbone router @constructor 
	 */ 
	var MaryRouter = Backbone.Router.extend({
    	routes: {
    		/* Route to show current project */
    		'project/:id': 'showProject',

    		/* Default route */
    		'*actions': 'default'
    	},

    	showProject: function( id ) {
    		console.log( 'Client calls to show ', id );
    	},

    	default: function( actions ) {
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