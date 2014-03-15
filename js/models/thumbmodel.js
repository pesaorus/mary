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
			        imagePreview: 'images/projects/sber/Sber_prew.png',
			        thumbTitle: 'No title',
			        thumbText: 'No text'
			    }
			});

		return ProjectThumb;
	});