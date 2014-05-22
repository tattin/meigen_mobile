function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.tableView = Ti.UI.createTableView({
        id: "tableView"
    });
    $.__views.index.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    (function() {
        var xhr = Ti.Network.createHTTPClient();
        xhr.open("GET", "http://meigen.do-ing.net/meigen/api.php?mode=list");
        xhr.onload = function() {
            var jsonText = this.responseText;
            var meigens = JSON.parse(jsonText);
            for (var i = 0; meigens.length > i; i++) {
                var bgcolor = 0 == i % 2 ? true : false;
                var row = Alloy.createController("row", {
                    id: i + 1,
                    bgcolor: bgcolor,
                    meigenText: meigens[i].meigen_text,
                    createdAt: meigens[i].created_at,
                    speaker: meigens[i].speaker
                }).getView();
                $.tableView.appendRow(row);
            }
        };
        xhr.send();
        $.index.open();
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;