$(function () {
    $("#more").click(function () {
        console.log("clicked!");

        var next_page = parseInt($(this).attr("current-page")) + 1;

        $.ajax({
            method: "GET",
            url: "/post",
            data: {"page": next_page}
        })
            .done(function(response) {
            for(var post of response) {
                $("#more-posts").append("<div class=\"post-preview\">" +
                    "<a href=\"/post/" + post.id + "\">" +
                    "<h2 class=\"post-title\">" +
                    post.title +
                    "</h2>\n" +
                    "<h3 class=\"post-subtitle\">" +
                    post.content +
                    "</h3></a><p class=\"post-meta\">Posted by " +
                    post.name +
                    "</p></div><hr class=\"my-4\" />");
            }
        });
        $(this).attr("current-page", next_page);
    });

    $("#create_button").click(function () {
        console.log("clicked!");

        var title = $("#post-title").val();
        var username = $("#post-username").val();
        var content = $("#post-content").val();

        $.ajax({
            method: "POST",
            url : "/post",
            data: JSON.stringify({
                "title" : title,
                "username" : username,
                "content" : content
            }),
            contentType : "application/json"
        })
            .done(function(response){
                console.log("Post creation success!");
                window.location.href = "/post/" + id ;
            })
    });

    $("#edit_button").click(function () {
        console.log("clicked!");

        var id = $("#edit-post-id").val();
        var title = $("#edit-post-title").val();
        var content = $("#edit-post-content").val();

        $.ajax({
            method: "PUT",
            url : "/post",
            data: JSON.stringify({
                "id" : id,
                "title" : title,
                "content" : content
            }),
            contentType : "application/json"
        })
            .done(function(response){
                console.log("Post creation success!");
                window.location.href = "/";
            })
    });

    // $("#create_button").click(function(){
    //     console.log("creat_button");
    //     var title = $("#post-title").val();
    //     var username = $("#post-username").val();
    //     var content = $("#post-content").val();
    //
    //     $.ajax({
    //         method: "POST",
    //         url : "/post",
    //         data: JSON.stringify({
    //             "title" : title,
    //             "username" : username,
    //             "content" : content
    //         }),
    //         contentType : "application/json"
    //     })
    //         .done(function(response){
    //         console.log("Post creation success!");
    //         window.location.href = "/";
    //     })
    // });

    $(".comment-edit").hide();

    $(".comment-edit-form-button").click(function () {
        $(this).closest(".comment_text").find(".comment-edit").show();
    });

    $(".comment-edit-cancel-button").click(function () {
        $(this).closest(".comment_text").find(".comment-edit").hide();
    });
});