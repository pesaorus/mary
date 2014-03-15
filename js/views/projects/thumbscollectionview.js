/**
 * Thumbs collection view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone',
        'views/projects/thumbview',
        'collections/thumbscollection'
    ],

    function( _, $, Backbone, ThumbView, ThumbsCollection ) {
    	var ThumbsListView = Backbone.View.extend({
    		tagName: 'div',
    		className: 'projects-list',

    		render: function() {
                var self = this;

                if (!this.shown) {
                    _.each( this.collection.models, function( collectionItem ) {
                        self.renderThumb( collectionItem );
                    }, this);

                    this.shown = true;
                }

                App.elements.$contentContainer.html( this.$el );
    		},

            shown: false,

            /**
             * Creates new thumb view.
             * 
             * @param {Object} thumb - model object
             */
            renderThumb: function( thumb ) {
                console.log( 'New thumb' );
                var thumbView = new ThumbView({
                        model: thumb
                    });

                this.$el.append( thumbView.render().el );
            },

            initialize: function() {
                this.collection = new ThumbsCollection( App.models );
            }
    	});

    	return ThumbsListView;
    });