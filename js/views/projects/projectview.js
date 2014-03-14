/**
 * Project view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone',
        'handlebars'
        //'text!views/projects/thumb-text.hbs'
    ],

    function( _, $, Backbone, Handlebars/*, thumbViewTpl*/ ) {
    	var ProjectView = Backbone.View.extend({
    		tagName: 'div',
    		className: 'project-slider',

    		render: function() {

    			this.$el.html( '<div><img src="' + this.model.get('imagesList')[0] + 
                    '"></div><div class="project-legend"><h2>' +  
                    this.model.get('title') + '</h2>' +
                    '<p>' + this.model.get('textShort') + '</p>' +
                    '<p>' + this.model.get('text') + '</p>' +
                    '<p>' + this.model.get('tools').join(', ') + '</p>' + 
                    '</div>' );

    			App.elements.$contentContainer.html( this.$el );
    			return this;
    		}
    	});

    	return ProjectView;
    });