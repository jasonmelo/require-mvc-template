define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/controller'),
        model = require('./model/model'),
        backbone = require('backbone'),
        underscore = require('underscore');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render();

        //do stuff
    });
});
