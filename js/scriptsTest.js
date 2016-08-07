(function() {
	"use strict";
	var oSearchData, sApiRequest, sSearchQuery;
	sApiRequest = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + sSearchQuery + "&utf8&format=json";

	$(".search").on("click", function() {
		sSearchQuery = $(".query")[0].value;
		// sApiRequest = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + sSearchQuery + "&utf8&format=json";
		// var results = json.query.search;

		$.ajax( {
			url: 'https://en.wikipedia.org/w/api.php',
			data: {
				action: 'query',
				list: 'search',
				srsearch: sSearchQuery,
				format: 'jsonp',
			},
    		crossDomain: true,
    		dataType: 'jsonp',
		} ).done( function ( data ) {
			document.write(data);
		} );

	});
}());