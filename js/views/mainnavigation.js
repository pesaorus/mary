/**
 * Main navigation view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone'
    ],

    function( _, $, Backbone ) {

        var MainNavigation = Backbone.View.extend({
            /* View container */
            el: $('#main-navigation'),

            initialize: function() {

                /* @public */
                this.$menuItems = $('.menu__item');

                /**
                * Delets 'current' class name from all menu elements.
                *
                * @public
                */
                this.clearMenuSelection = function() {
                    this.$menuItems.each(function() {
                        $(this).parent().removeClass('current');
                    });

                    return this;
                };

                /**
                 * Adds 'current' class name to $item.parent() jquery element
                 *
                 * @public
                 * @param {Object} $item - jquery item (link) to add 'current' class name
                 */
                this.selectMenuItem = function($item) {
                    $item.parent().addClass('current');

                    return this;
                };

                this.selectRoutedMenuItem = function( $item ) {
                    App.views.mainNavigation
                        .clearMenuSelection()
                        .selectMenuItem( $item );
                };

                this.render();
            },


            events: {
                "click .menu__item": "redrawMenu"
            },

            /**
             * Delets from all menu items 'current' class 
             * name and adds this class name to 
             * click target.
             */
            redrawMenu: function(e) {
                var $selectedElement = $( e.target );

                this
                    .clearMenuSelection()
                    .selectMenuItem( $selectedElement );

                return this;
            },

            /* Render method */
            render: function() {
                console.log( 'menu rendered' );
            }
        });

        return new MainNavigation;
});