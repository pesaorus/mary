/**
 * Thumb view.
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
    	var ThumbView = Backbone.View.extend({
    		tagName: 'div',
    		className: 'thumb project',

    		attributes: function() {
    			var bgImage = 'background-image: url(\'' +  this.model.get('imagePreview') + '\')';
    			return {
    				style: bgImage
    			}
    		},

    		render: function() {
    			//var template = Handlebars.compile( thumbViewTpl.html() );
    			this.$el.html( '<a href="#/project/' + 
    					this.model.get('id') + 
    					'"><div class="thumb-text"><h3>' + 
    					this.model.get('title') + '</h3>' + 
    					this.model.get('textShort') + '</div></a>' );

    			//this.$el.html( JSON.stringify( this.model ) );

    			console.log( 'Thumb rendered', this.$el );
    			return this;
    		}
    	});

    	return ThumbView;
    });