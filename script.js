/**
 * Created by jolanwuyts on 27/03/17.
 */
$(function() {
    console.log("Jquery test");
});

function searchfn(query){
    console.log(query);
    if($('#veg').is(':checked')){
        var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&diet=vegetarian&limitLicense=false&number=10&offset=0&query='+query+'&ranking=1';
    } else if($('#lactoveg').is(':checked')) {
        var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&diet=lacto-vegetarian&limitLicense=false&number=10&offset=0&query=' + query + '&ranking=1';
    } else if($('#pesca').is(':checked')) {
        var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&diet=pescatarian&limitLicense=false&number=10&offset=0&query=' + query + '&ranking=1';
    } else if($('#vegan').is(':checked')) {
        var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&diet=vegan&limitLicense=false&number=10&offset=0&query=' + query + '&ranking=1';
    }
    $.ajax({
        url: url, // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            var results = (data.results);
            $('#results').empty();
            for (var i=0; i < results.length; i++){
                console.log(results[i]);
                var categories = "categories: ";
                $('#results').append("<div class='result'><div class='resultimgdiv'><img class='resultimg' src="+results[i].image+"></div><div class='firstinfodiv'><ul><li><a href='"+(results[i].sourceUrl)+"'>"+(results[i].title)+"</a></li><li>Categories: blah</li><li>Ready in: "+(results[i].readyInMinutes)+" minutes</li></ul></div><div class='secondinfodiv'><ul><li>Cuisine: "+(results[i].cuisines)+"</li><li>Dish type: "+(results[i].dishTypes)+"</li><li>Calories: "+(results[i].calories)+"</li></ul></div></div>");
            }
        },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "VUid4dgsO3mshHymsIVwPEjlLQKAp1yijEvjsnMIDG19iY0H0a"); // Enter here your Mashape key
        }
    })
}
/*
function vegetarianfn(query){
    console.log(query);
    $.ajax({
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&diet=vegetarian&limitLicense=false&number=10&offset=0&query=pancakes&ranking=1', // The URL to the API. You can get this in the API page of the API you intend to consume
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
    */