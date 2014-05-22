(function() {
	var pageIndex = 1;
	var connecting = false;

	var drawNextPage = function() {
		if (connecting) return;

		connecting = true;

		var xhr = Ti.Network.createHTTPClient();
		xhr.onload = function() {
			try {

				var jsonText = this.responseText;
				var meigens = JSON.parse(jsonText);

				for (var i = 0; i < meigens.length; i++) {
					console.log(meigens[i].meigen_text);
					var bgcolor = i % 2 == 0 ? true : false;
					var row = Alloy.createController("row", {
						id : i + 1,
						'bgcolor' : bgcolor,
						'meigenImageUrl' : meigens[i].meigen_image_url,
						'meigenText' : meigens[i].meigen_text,
						'createdAt' : meigens[i].created_at,
						'speaker' : meigens[i].speaker,
					}).getView();

					$.tableView.appendRow(row);
				}

			} finally {
				connecting = false;
			}
		};
		xhr.open("GET", "http://meigen.do-ing.net/meigen/api.php?mode=list&page_no=" + pageIndex++);
		xhr.send();
	};

	$.tableView.addEventListener("scroll", function(e) {
		var heightFromBottom = e.contentSize.height - e.contentOffset.y;
		if (heightFromBottom <= (e.size.height - 40)) {
			drawNextPage();
		}
	});

	drawNextPage();

	$.index.open();
})();
