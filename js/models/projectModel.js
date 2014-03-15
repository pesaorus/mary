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
			        	'images/projects/sber/Sber_1.png',
			        	'images/projects/sber/Sber_2.png',
			        	'images/projects/sber/Sber_3.png',
			        ],
			        title: 'No title',
			        text: 'The promotional site for Sberbank Online. The goal of it is to introduce the benefits of online payments instead of staying in queues. (Web designed by the Art Director).',
			        tools: ['Adobe Illustrator CS 5.5'],
			        tags: ['Illustration']
			    }
			});

		return ProjectModel;
	});