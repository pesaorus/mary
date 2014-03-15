/**
 * Thumb view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone',
        'handlebars',
        'text!views/thumb-text.hbs'
    ],

    function( _, $, Backbone, Handlebars, thumbViewTpl) {
    	var ThumbView = Backbone.View.extend({
    		tagName: 'div',
    		className: 'thumb project',

    		attributes: function() {
    			var bgImage = 'background: url(\'' +  this.model.get('imagePreview') + '\') no-repeat 50% top';
    			return {
    				style: bgImage
    			}
    		},

    		render: function() {
    			var template = Handlebars.compile( thumbViewTpl ),
                    data = {
                        id: this.model.get('id'),
                        thumbTitle: this.model.get('thumbTitle'),
                        thumbText: this.model.get('thumbText')
                    };
    			this.$el.html( template(data) );

    			console.log( 'Thumb rendered', this.$el );
    			return this;
    		}
    	});

    	return ThumbView;
    });