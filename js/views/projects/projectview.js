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

            initialize: function() {
                _.bindAll(this, 'scrollFullViewToTheLeft', 'scrollFullViewToTheRight', 'renderNewCurrentIndex');
            },

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

            /**
             * Completly destroy the view
             */
            destroyView: function() {
                this.undelegateEvents();
                this.$el.removeData().unbind();
                this.remove();
                Backbone.View.prototype.remove.call(this);
            },

            scrollFullViewToTheLeft: function(e) {
                var $currentImageContainer = $('.full-view-container .visible');

                if ( $currentImageContainer.prev().length ) {

                    /**
                     * Restoring opacity of the 'right' arrow
                     */
                    this.$scrollRightContainer.css({
                        opacity: 1
                    });

                    $currentImageContainer
                        .removeClass('visible')
                        .addClass('hidden')
                        .prev()
                            .removeClass('hidden')
                            .addClass('visible');

                    this.currentImageIndex--;
                    this.renderNewCurrentIndex( this.currentImageIndex );

                    if ( !$currentImageContainer.prev().prev().length ) {
                        this.$scrollLeftContainer.css({
                            opacity: 0.3
                        });
                    }
                }

                e.preventDefault();
            },

            scrollFullViewToTheRight: function(e) {
                var $currentImage = $('.full-view-container .visible'),
                    currtneImageHeight = $currentImage.height();

                if ( $currentImage.next().length ) {
                    var $nextImageContainer =  $currentImage.next();

                    /**
                     * Images loading on demand.
                     *
                     * TODO: make preloader
                     */
                    if ( $( $nextImageContainer.find('img')[0] ).data('src') ) {

                        var $nextImage = $( $nextImageContainer.find('img')[0] ),
                            nextImageSrc = $nextImage.data('src'),
                            lazyImageLoad = new Image();

                        /* Save block height */
                        $nextImageContainer.height( currtneImageHeight + 'px' );

                        lazyImageLoad.src = nextImageSrc;

                        lazyImageLoad.onload = function() {
                            var newImg = $(this);

                            $nextImageContainer.html( newImg );

                            /* Reset container height to provide full image autosizing */
                            $nextImageContainer.height( 'auto' );
                        };
                    }

                    /**
                     * Restoring opacity of the 'left' arrow
                     */
                    this.$scrollLeftContainer.css({
                        opacity: 1
                    });

                    /**
                     * Show next image container.
                     */
                    $currentImage
                        .removeClass('visible')
                        .addClass('hidden');
                    
                    $nextImageContainer
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
                var newIndexText = index < 10 ? '0' + index : index;
                this.$currtntImageIndexContainer.html( newIndexText );
            }

        });

        return ProjectView;
    });