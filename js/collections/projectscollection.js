/**
 * Project thumb collection
 */
define(
    /* Collection dependencies */
    [
        'underscore',
        'jquery',
        'backbone',
        'models/thumbmodel'
    ],

    function( _, $, Backbone, thumbModel ) {
        var ProjectsCollection = Backbone.Collection.extend({
                model: thumbModel
            });

        return ProjectsCollection;
    });