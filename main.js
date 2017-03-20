$(document).ready(function(){
    $('#search').click(function(){
    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data) {
            var heading = data[1][0] + "<hr>" ;
            var description = data[2][0];
            var link = data[3][0];
            
    
            document.getElementById("heading").innerHTML = "There were " + data[1].length + " results for your search of " + searchTerm +"." + "<hr>";
            $("#bodyResults").html('');
            for (var i=0; i<data[1].length; i++)
                $("#bodyResults").append('<li><a href= ' + data[3][i] + ">" +data[1][i]+ "</a><p>" + data[2][i]+ "</p></li>" + "<hr>")
            $("#searchTerm").val('');
        },
        error: function (errorMessage){
            alert("Error")
        }

    });
    
    
    
    
    
    
}); 
    $("#searchTerm").keypress(function(e){
        if (e.which===13){
            $("#search").click();
        }
    })
});