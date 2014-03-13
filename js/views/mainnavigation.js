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
                this.render();
            },

            $menuItems: $('.menu__item'),

            events: {
                "click .menu__item": "redrawMenu"
            },

            redrawMenu: function(e) {
                this.$menuItems.each(function() {
                    $(this).parent().removeClass('current');
                });
                $(e.target).parent().addClass('current');
            },

            /* Render method */
            render: function() {
                console.log( 'menu rendered' );
            }
        });

        return new MainNavigation;
});