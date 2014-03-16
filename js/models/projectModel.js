/**
 * Project model
 */
define(
    /* Model dependencies */
    [
        'backbone'
    ],

    function( Backbone ) {
        var ProjectModel = Backbone.Model.extend({
                defaults: {
                    imagesList: [
                        'images/projects/sber/Sber_1.png'
                    ],
                    title: 'Oooops =(',
                    text: 'There is no such project yet =(',
                    tools: [],
                    tags: []
                }
            });

        return ProjectModel;
    });