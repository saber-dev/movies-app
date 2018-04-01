$.get( "/movies", function(res){
    if(!res) return console.log('no res');

    console.log(res.title);
    $('.movies').append("<div class='movie_card'></div>");
    div_movie_card = $('.movie_card');
    div_movie_card.append("<button class='btn btn-default'> <img src="+res.image+" alt="+res.title+" width=250px height=300px /></a>");
    link_desc = $('.link_to_desc')
    link_desc.attr({
        "data-toggle": "popover",
        "title": res.title,
        "data-content": "c'est un bon film"
    })
    link_desc.popover({
        container: 'body'
    })

});
   

