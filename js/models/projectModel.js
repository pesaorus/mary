/**
 * Project model
 */
define(
  	/* Model dependencies */
  	[
    	'backbone'
	],

	function( Backbone ) {
		var ProjectModel = Backbone.Model.extend({
				defaults: {
			        imagesList: [
			        	'images/projects/Sber_1.png',
			        	'images/projects/Sber_2.png',
			        	'images/projects/Sber_3.png',
			        ],
			        title: 'No title',
			        text: 'No text',
			        tools: ['Adobe Illustrator']
			    }
			});

		return ProjectModel;
	});