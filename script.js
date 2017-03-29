/**
 * Created by jolanwuyts on 27/03/17.
 */
$(function() {
    console.log("Jquery test");
});
function dietclick() {
    console.log('clicked diet button');
}

function vegfunction(query){
    console.log(query);
   $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=false&diet=vegetarian&limitLicense=false&number=10&offset=0&query='+query+'&ranking=1', // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            var results = (data.results);
            $('#results').empty();
            for (var i=0; i < results.length; i++){
                console.log(results[i]);
                $('#results').append("<p>"+(results[i].title)+"</p><img src="+results[i].image+">");
            }
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "VUid4dgsO3mshHymsIVwPEjlLQKAp1yijEvjsnMIDG19iY0H0a"); // Enter here your Mashape key
        }
    })
}
