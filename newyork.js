
var userTerm = "war".value()

var beginYear = "1995";

var endYear ="2010"

var articleNum = 5;



$("#submit").on("click", function(){

	userTerm = JSON.stringify($(selector).val());//their variable
	beginYear = JSON.stringify($(selector).val()); //year
	endYear = JSON.stringify($(selector).val());// end year


});




var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "1a2d78adefcd43be80e41b97a2f1acb5",
		  'q': userTerm,
		  'begin_date': beginYear + "0101",
		  'end_date': endYear + "1231"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {

			for (var i = 0; i <= articleNum; i++) {
				$("#article").append(result.response.docs[i].headline.main);

				//console.log(result.response.docs[i].headline.main);
			}
		  //console.log(result);
		}).fail(function(err) {
		  throw err;
		});





