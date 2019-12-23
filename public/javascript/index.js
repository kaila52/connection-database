$(document).ready(function () {
    $("#button-login").click(function () {
        var body = {
            email: $("#email").val(),
            password: $("#password").val()
        }
        $.ajax({
            url: "/login",
            type: "POST",
            data: body,
            dataType: "json"
        }).then((data) => {
            if (data === '200') {
                location.reload();
            } else {
                $(".attr").attr("class", "alert alert-danger").text(data);
            }

        })

    });
    //end login

    $("#button-register").click(function () {
        var body = {
            fullname: $("#fullname").val(),
            user: $("#user").val(),
            email: $("#email").val(),
            password: $("#password").val()
        }
        $.ajax({
            url: "/register",
            type: "POST",
            data: body,
            dataType: "json"
        }).then((data) => {
            if(data == '200'){
                location.replace('/login');
            }else{
                $(".attr").attr("class", "alert alert-danger").text(data);
            }
        })

    });
});