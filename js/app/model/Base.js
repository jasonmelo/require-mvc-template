define(function () {
    function modelBase(modelObj) {
        this.object = modelObj;
    }

    modelBase.prototype = {
        getTitle: function () {
            return this.object.title;
        },

        getOwner: function () {
            return this.object.owner;
        },

        getLeft: function () {
            return this.object.left;
        },

        getRight: function () {
            return this.object.right;
        },

        getDelta: function () {
            return "";
        },

        getVersion: function () {
            return this.object.version;
        },

        getModified: function () {
            return this.object.modified;
        }
    };

    return modelBase;
});
