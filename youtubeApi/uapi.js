$(document).ready(function(){
    var API_KEY = "AIzaSyCSWyLv-vehCKYpqcgIJ6w1uKI2OBVggE8"

    $("form").submit(function (event) {
        event.preventDefault()
        alert("form is submitted")

        var search = $("#form").val()

        videoSearch(API_KEY,search,15)
    })

    function videoSearch(key,search,maxResults) {
        // jq get req
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key 
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){})
        console.log(data)
    }
})
console.log("ok")