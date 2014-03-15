/**
 * Project view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone',
        'handlebars',
        'text!views/projects/project-view.hbs'
    ],

    function( _, $, Backbone, Handlebars, projectViewTpl ) {
        var ProjectView = Backbone.View.extend({
            tagName: 'div',
            className: 'project-slider',

            template: Handlebars.compile( projectViewTpl ),
            currentImageIndex: 1,

            render: function() { 

                var imagesCount = this.model.get('imagesList').length,
                    data = {
                        /* Data to draw project images gallery */
                        firstImage: this.model.get('imagesList')[0],
                        imagesExeptFirst: this.model.get('imagesList').slice(1),

                        title: this.model.get('title'),
                        textShort: this.model.get('textShort'),
                        text: this.model.get('text'),
                        tools: this.model.get('tools').join(', '),
                        tags: this.model.get('tags').join(', '),
                        totalImagesCount: imagesCount < 10 ? '0' + imagesCount : imagesCount,
                        currentIndex: '01'
                    };

                this.$el.html( this.template(data) );

                App.elements.$contentContainer.html( this.$el );
                this.$currtntImageIndexContainer = $('.current-index');
                this.$scrollLeftContainer = $('.scroll-left');
                this.$scrollRightContainer = $('.scroll-right');

                /**
                 * Left scroll arrow initialization
                 */
                this.$scrollLeftContainer.css({
                    opacity: 0.3
                });

                return this;
            },

            events: {
                'click .scroll-left': 'scrollFullViewToTheLeft',
                'click .js-prev-image': 'scrollFullViewToTheLeft',

                'click .scroll-right': 'scrollFullViewToTheRight',
                'click .js-next-image': 'scrollFullViewToTheRight',
                'click .full-view-container': 'scrollFullViewToTheRight'
            },

            scrollFullViewToTheLeft: function(e) {
                var $currentImage = $('.full-view-container .visible');

                if ( $currentImage.prev().length ) {

                    /**
                     * Restoring opacity of the 'right' arrow
                     */
                    this.$scrollRightContainer.css({
                        opacity: 1
                    });

                    $currentImage
                        .removeClass('visible')
                        .addClass('hidden')
                        .prev()
                            .removeClass('hidden')
                            .addClass('visible');

                    this.currentImageIndex--;
                    this.renderNewCurrentIndex( this.currentImageIndex );

                    if ( !$currentImage.prev().prev().length ) {
                        this.$scrollLeftContainer.css({
                            opacity: 0.3
                        });
                    }
                }

                e.preventDefault();
            },

            scrollFullViewToTheRight: function(e) {
                var $currentImage = $('.full-view-container .visible');

                if ( $currentImage.next().length ) {

                    /**
                     * Restoring opacity of the 'left' arrow
                     */
                    this.$scrollLeftContainer.css({
                        opacity: 1
                    });

                    $currentImage
                        .removeClass('visible')
                        .addClass('hidden')
                        .next()
                            .removeClass('hidden')
                            .addClass('visible');
                    this.currentImageIndex++;
                    this.renderNewCurrentIndex( this.currentImageIndex );

                    if ( !$currentImage.next().next().length ) {
                        this.$scrollRightContainer.css({
                            opacity: 0.3
                        });
                    }
                }

                e.preventDefault();
            },

            renderNewCurrentIndex: function( index ) {
                console.log( 'New index', index );
                var newIndexText = index < 10 ? '0' + index : index;
                this.$currtntImageIndexContainer.html( newIndexText );
            }

        });

        return ProjectView;
    });