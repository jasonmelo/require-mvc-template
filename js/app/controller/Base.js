define(function () {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },

        render: function () {
            console.log("entering... ", this.id);
            console.log("using... ", this.model);
        }
    };

    return controllerBase;
});
