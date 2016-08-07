(function() {
	"use strict";
	var oSearchData, sApiRequest, sSearchQuery;
	sApiRequest = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + sSearchQuery + "&utf8&format=json";
	$(".search").on("click", function() {
		sSearchQuery = $(".query")[0].value;
		sApiRequest = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + sSearchQuery + "&utf8&format=json";
		sApiRequest = encodeURI(sApiRequest);
		$.getJSON(sApiRequest, function(json){
			var aResults = json.query.search;
			for (var i = 0; i < aResults.length; i++) {
				var element = aResults[i];
				var sResultTitle = element.title;
				var sResultLink = sResultTitle.split(" ");
				sResultLink = "https://en.wikipedia.org/wiki/" + sResultLink.join("_")
				var sResultSnippet = element.snippet;
				var sResultTemplate = $("<li class=\"result\"><a target=\"_blank\" href=\""+sResultLink+"\"><h4>"+sResultTitle+"</h4></a><p>"+sResultSnippet+"<a target=\"_blank\" href=\""+sResultLink+"\"> ...read more</a>"+"</p>"+"</li>");
				$(".search-results").append(sResultTemplate);
				json = {};
			}
		})
	});
}());