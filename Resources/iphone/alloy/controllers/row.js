function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: "86dp",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "30%",
        left: "0dp",
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.meigenImageUrl = Ti.UI.createImageView({
        id: "meigenImageUrl",
        image: ""
    });
    $.__views.__alloyId0.add($.__views.meigenImageUrl);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "70%",
        right: "0dp",
        id: "__alloyId1"
    });
    $.__views.row.add($.__views.__alloyId1);
    $.__views.meigenText = Ti.UI.createLabel({
        id: "meigenText"
    });
    $.__views.__alloyId1.add($.__views.meigenText);
    $.__views.createdAt = Ti.UI.createLabel({
        right: "0dp",
        bottom: "15dp",
        font: {
            fontSize: "14dp"
        },
        id: "createdAt"
    });
    $.__views.__alloyId1.add($.__views.createdAt);
    $.__views.speaker = Ti.UI.createLabel({
        right: "0dp",
        bottom: "0dp",
        font: {
            fontSize: "15dp"
        },
        id: "speaker"
    });
    $.__views.__alloyId1.add($.__views.speaker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.backgroundColor = args.bgcolor ? "#faf8f5" : "#eee4db";
    $.meigenText.text = args.meigenText;
    $.meigenImageUrl.image = args.meigenImageUrl;
    $.createdAt.text = args.createdAt;
    $.speaker.text = args.speaker;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;