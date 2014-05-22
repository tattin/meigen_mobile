(function() {
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", "http://meigen.do-ing.net/meigen/api.php?mode=list");
	xhr.onload  = function() {
		var jsonText = this.responseText;
		var meigens = JSON.parse(jsonText);

		for (var i=0; i<meigens.length; i++) {
			// console.log(meigens[i].meigen_text);
			var bgcolor = i % 2 == 0 ? true : false;
			var row = Alloy.createController("row",{
				id: i+1,
				'bgcolor': bgcolor,
				'meigenImageUrl':meigens[i].meigen_image_url,
				'meigenText':meigens[i].meigen_text,
				'createdAt':meigens[i].created_at,
				'speaker':meigens[i].speaker,
			}).getView();

			$.tableView.appendRow(row);
		}
	};
	xhr.send();


	$.index.open();
})();
