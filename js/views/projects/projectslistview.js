/**
 * Projects list paje view.
 */
define(
    [
        'underscore',
        'jquery',
        'backbone'
    ],

    function( _, $, Backbone ) {

        var ProjectsListView = Backbone.View.extend({
            /* View container */
            el: $('#content'),

            /* Render method */
            render: function() {
                console.log( 'Projects list render' );
                var data = {},
                    /* Right now it`s just a temporary cap */
                    $compiledTemplate = $('<div class="projects-list" style="display:none"><div class="thumb project">1</div><div class="thumb project">2</div><div class="thumb project">3</div></div>'); //_.template( projectListTemplate, data );
                console.log( this.$el );
                this.$el.html( $compiledTemplate.show() );
            }
        });

        return new ProjectsListView;
});