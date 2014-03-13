/**
 * Contacts paje view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone'
    ],

    function( _, $, Backbone ) {

        var ContactsView = Backbone.View.extend({
            /* View container */
            el: $('#content'),

            /* Render method */
            render: function() {

                var data = {},
                    $compiledTemplate = $('<h1 style="display:none">Contacts</h1>'); //_.template( projectListTemplate, data );

                this.$el.html( $compiledTemplate.show() );
            }
        });

        return new ContactsView;
});