/**
 * Project thumb model
 */
define(
  	/* Model dependencies */
  	[
    	'backbone'
	],

	function( Backbone ) {
		var ProjectThumb = Backbone.Model.extend({
				defaults: {
					id: 0,
			        imagePreview: 'images/projects/Sber_prew.png',
			        title: 'No title',
			        textShort: 'No text'
			    }
			});

		return ProjectThumb;
	});