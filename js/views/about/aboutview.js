/**
 * About paje view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone'
    ],

    function( _, $, Backbone ) {

        var AboutView = Backbone.View.extend({
            /* View container */
            el: $('#content'),

            /* Render method */
            render: function() {

                var data = {},
                    $compiledTemplate = $('<h1 style="display:none">About</h1>'); //_.template( projectListTemplate, data );
                // Append our compiled template to this Views "el"
                this.$el.html( $compiledTemplate.show() );
            }
        });

        return AboutView;
});