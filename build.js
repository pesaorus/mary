({
    baseUrl: "js/",
    paths: {
        jquery: "libs/jquery.2.1.0.min",
        underscore: "libs/underscore1.6.0.min",
        backbone: "libs/backbone.min",
        handlebars: "libs/handlebars"
    },
    shim: {
        "handlebars": {
            exports: "Handlebars"
        }
    },
    name: "app",
    out: "js/app-built.js"
})